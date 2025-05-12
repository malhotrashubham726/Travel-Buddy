const jwt=require('jsonwebtoken');
const userKey="MERNPROJECT";

const midWare=async(req, res, next) => {
    const headToken=await req.header('token');
    if(!headToken) {
        return res.status(400).json({error: "Token not present in header"});
    }

    else {
        try {
            const uId=await jwt.verify(headToken, userKey);
            req.id=uId;
            next();
        }
        catch(error) {
            return res.status(500).json({error: "Some error occured"})
        }
    }
}

module.exports=midWare;