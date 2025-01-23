const mongoose=require('mongoose');
const { Schema } = mongoose;

const travelSchema=new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    from: {
        type: "String",
        required: true
    },
    to: {
        type: "String",
        required: true
    },
    noOfMembers: {
        type: "Integer",
        required: true
    },
    date: {
        type: "String",
        required: true
    }
})

const travel=mongoose.model('travel', travelSchema);
module.exports=travel;