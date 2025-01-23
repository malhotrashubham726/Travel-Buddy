const express=require('express');
const router=express.Router();
const { body, validationResult }=require('express-validator');
const midWare=require('../Middleware/middleware');
const travel=require('../models/travel');

router.post('/book', midWare, [
    body("from", "Enter the valid pickup").isLength({min: 3}),
    body("to", "Enter the valid destination").isLength({min: 3}),
    body("noOfMembers", "Enter the valid character").isNumeric()
], async(req, res) => {
    try {
        const validation=await validationResult(req);
        if(!validation.isEmpty()) {
            return res.status(500).send("Validation failed");
        }

        else {
            const booking=travel.create({
                from: req.body.from,
                to: req.body.to,
                noOfMembers: req.body.noOfMembers,
                user: req.id
            }) 

            return res.status(200).json({booking: booking, out: "Booking added successfully"});
        }
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
})

router.get('/getdest', midWare, async(req, res) => {
    try {
        const details= await travel.find({user: req.id});
        if(!details) {
            return res.status(404).send("No bookings found");
        }
    
        else {
            return res.status(200).json({bookings: details})
        }
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
    
})

module.exports=router;