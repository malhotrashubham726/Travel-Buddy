const express=require('express');
const router=express.Router();
const {body, validationResult}=require('express-validator');
const midWare=require('../Middleware/midWare1');
const userModel=require('../models/User1');
const travel=require('../models/travel1');

router.post('/addDetail', [
    body("from", "Enter the valid pickup point").isLength({min: 3}),
    body("to", "Enter the valid destination point").isLength({min: 3}),
    body("noOfMembers", "Enter the valid character").isLength({min: 1})
], midWare, async(req, res) => {
    try {
        const errors=await validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({error: errors})
        }

        else {
            const userId=await userModel.findById(req.id);

            if(!userId) {
                return res.status(404).json({error: "No user found"})
            }

            const travelBooking=await travel.create({
                user: req.id,
                to: req.body.to,
                from: req.body.from,
                noOfMembers: req.body.noOfMembers
            })

            return res.status(200).json({status: "Travel Booking successfully completed", booking: travelBooking})
        }
    }
    catch(error) {
        return res.status(500).json({error: "Some error occured"});
    }
})

router.post('/getDetails', midWare, async(req, res) => {
    try {
        const userId=await userModel.findById(req.id);

        if(!userId) {
            return res.status(404).json({error: "No user found"})
        }

        const travelResponse=await travel.find({user: req.id});
        return res.status(200).json({travelBookings: travelResponse})
    }
    catch(error) {
        return res.status(500).json({error: "Some error occured"});
    }
})

module.exports=router;