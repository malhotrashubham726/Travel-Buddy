const mongoose=require('mongoose');
const url='mongodb://127.0.0.1:27017/prac1';

const connectToDB=(() => {
    mongoose.connect(url, ()=> {
        console.log("Connected to MongoDB successfully");
    })
})

module.exports=connectToDB;