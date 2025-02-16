const express=require('express');
const router=express.Router();
const { body, validationResult }=require('express-validator');
const midWare=require('../Middleware/middleware');
const travel=require('../models/travel');

router.post('/book', midWare, [
    body("from", "Enter the valid pickup").isLength({min: 3}),
    body("to", "Enter the valid destination").isLength({min: 3}),
    body("noOfMembers", "Enter the valid character").isLength({min:1})
], async(req, res) => {
    try {
        const validation=await validationResult(req);
        if(!validation.isEmpty()) {
            return res.status(500).send("Validation failed");
        }

        else {
            const book= {
                from: req.body.from,
                to: req.body.to,
                noOfMembers: req.body.noOfMembers,
                user: req.id
            }

            await travel.create(book);

            return res.status(200).json({book});
        }
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
})

router.post('/getdest', midWare, async(req, res) => {
    try {
        const details= await travel.find({user: req.id});
        if(!details) {
            return res.status(404).send("No bookings found");
        }
    
        else {
            return res.status(200).json(details)
        }
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
    
})

router.delete('/del/:id', midWare, async(req, res) => {
    try {
        const travelBooking=await travel.findById(req.params.id);
        if(!travelBooking) {
            return res.status(404).send("No records found");
        }

        else if(travelBooking.user.toString()===req.id) {
            await travel.findByIdAndDelete(req.params.id);
            return res.status(200).send("Booking deleted successfully")
        }
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
})

router.put('/edit/:id', [
    body("from", "Enter the valid pickup").isLength({min: 3}),
    body("to", "Enter the valid destination").isLength({min: 3}),
    body("noOfMembers", "Enter the valid character").isLength({min: 1})
], midWare, async(req, res) => {
    try {
        const validate=await validationResult(req);
        if(!validate) {
            return res.status(500).json({error: "Validation failed"});
        }

        else {
            const rec=await travel.findById(req.params.id);
            if(!rec) {
                return res.status(404).json({error: "Record not found"});
            }
            else {
                if(rec.user.toString()===req.id) {
                    const updateDet={};
                    if(req.body.from) {
                        updateDet.from=req.body.from;
                    }

                    if(req.body.to) {
                        updateDet.to=req.body.to;
                    }

                    if(req.body.noOfMembers) {
                        updateDet.noOfMembers=req.body.noOfMembers;
                    }

                    await travel.findByIdAndUpdate(req.params.id, {$set: updateDet});
                    return res.status(200).json({success: "Booking edited successfully", booking: updateDet});
                }
            }
        } 
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
})

module.exports=router;