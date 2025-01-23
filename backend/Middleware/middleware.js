const jwt=require('jsonwebtoken');
const jwtSecret="travelbuddy";

const midWare=async(req, res, next) => {
    const token=req.header("authtoken");

    if(!token) {
        return res.status(500).send("Token not passed");
    }

    else {
        const data=jwt.verify('token', jwtSecret);
        req.id=data.id;
        next();
    }
}

module.exports=midWare;