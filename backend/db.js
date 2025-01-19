const mongoose=require('mongoose');
const mongoURL="mongodb://127.0.0.1:27017/travel";

const mongoFunc=(() => {
    mongoose.connect(mongoURL, ()=> {
        console.log("Connected to MongoDB Successfully");
    })
})

module.exports=mongoFunc;