const express=require('express');
const router=express.Router();
const {body, validationResult}=require('express-validator');
const user=require('../models/User1');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userKey="MERNPROJECT";
const midWare=require('../Middleware/midWare1');

router.post('/signup', [
    body("name", "Length should not be less than 3 characters").isLength({min: 3}),
    body("email", "Enter the valid email").isEmail(),
    body("password", "Length should not be less than 5 characters").isLength({min: 5})
], async(req, res) => {
    try {
        const result=await validationResult(req);

        if(!result.isEmpty()) {
            return res.status(400).json({errors: result})
        }

        else {
            const regEmail=await user.findOne({email: req.body.email});
            if(regEmail) {
                return res.status(400).json({error: "Email already exists"});
            }

            const salt=await bcrypt.genSalt(10);
            const reqPass=await bcrypt.hash(req.body.password, salt);

            const userDetails=await user.create({
                name: req.body.name,
                email: req.body.email,
                password: reqPass
            })

            const userId={
                id: userDetails.id
            }

            const token=await jwt.sign(userId, userKey);

            return res.status(200).json({token: token, userDetails: userDetails});
        }
    }
    
    catch(error) {
        return res.status(500).json({error: error})
    }
})

router.post('/login', [
    body("email", "Enter the valid email").isEmail(),
    body("password", "Length of password should not be less than 5 characters").isLength({min: 5})
], async(req, res) => {
    try {
        const result=await validationResult(req);

        if(!result.isEmpty()) {
            return res.status(400).json({error: result})
        }

        else {
            const userDetails=await user.findOne({email: req.body.email});
            if(!userDetails) {
                return res.status(400).json({error: "User not exists"});
            }

            else {
                const pwdCompare=await bcrypt.compare(req.body.password, userDetails.password);
                if(!pwdCompare) {
                    return res.status(400).json({error: "Invalid email or password"});
                }

                else {
                    const token=await jwt.sign(userDetails.id, userKey);
                    return res.status(200).json({token: token, userDetails: userDetails});
                }
            }
        }
    }
    catch(error) {
        return res.status(500).json({error: "Some error occured"})
    }
})

router.post('/getuser', midWare, async(req, res)=> {
    try {
        let userDetails=await user.findById(req.id);
        if(!userDetails) {
            return res.status(400).json({error: "Credentials failed"});
        }

        else {
            return res.status(200).json({userDetails: userDetails});
        }
    }
    catch(error) {
        return res.status(500).json({error: "Some error occured"})
    }
})

module.exports=router;