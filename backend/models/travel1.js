const mongoose=require('mongoose');
const {Schema}=mongoose;

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
        type: "String",
        required: true
    }

    // date: {

    // }
})

const travelUser=mongoose.model('travel', travelSchema);
module.exports=travelUser;