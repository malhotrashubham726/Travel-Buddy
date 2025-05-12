const express=require('express');
const router=express.Router();
const {body, validationResult}=require('express-validator');
const user=require('../models/User');
const bcrypt=require('bcryptjs');
const jwtSecret="travelbuddy";
const jwt=require('jsonwebtoken');

router.post('/signup', [
    body("name", "Length should not be less than 3 characters").isLength({minLength: 3}),
    body("email", "Enter the valid email Id").isEmail(),
    body("password", "Length of password should be more than 3 characters").isLength({minLength: 3})
], async(req, res) => {
    try {
        const validate=await validationResult(req);
        if(!validate.isEmpty()) {
            return res.status(500).json({error: "Validations failed"});
        }

        else {
            const existUser=await user.findOne({email: req.body.email});
            if(existUser) {
                return res.status(500).json({error: "User already exists"});
            }
            else {
                const salt=await bcrypt.genSalt(10);
                const pwd=await bcrypt.hash(req.body.password, salt);

                const signUser=await user.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: pwd
                })

                const userId={
                    id: signUser.id
                }

                const token=jwt.sign(userId, jwtSecret);
                return res.status(200).json({message: "Account created successfully", authtoken: token});
            }
        }
    }
    catch(error) {
        return res.status(500).send("Some error occured");
    }
})

router.post('/login', [
    body("email", "Enter the valid email Id").isEmail(),
    body("password", "Length of password should be more than 3 characters").isLength({minLength: 3})
], async(req, res) => {
    try {
        const validate=await validationResult(req);
        if(!validate) {
            return res.status(500).json({error: "Validation failed"});
        }

        else {
            const existUser=await user.findOne({email: req.body.email});
            if(!existUser) {
                return res.status(404).json({error: "User not exists"});
            }
            else {
                const pwdCheck=await bcrypt.compare(req.body.password, existUser.password);
                console.log(pwdCheck);
                console.log(req.body.password);
                console.log(existUser.password);
                if(!pwdCheck) {
                    return res.status(500).json({error: "Invalid email or password"})
                }

                else {
                    const userId={
                        id: existUser.id
                    }

                    const token=jwt.sign(userId, jwtSecret);
                    return res.status(200).json({message: "Login Successful", authtoken: token});
                }
            }
        }
    }
    catch(error) {
        res.status(500).json({error: "Some error occured"});
    }
})

module.exports=router;