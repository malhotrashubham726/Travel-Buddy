const express=require('express');
const app=express();
const port=5000;
const mongoFunc=require('./db');
const cors=require('cors');

mongoFunc(); 
app.use(express.json());
app.use(cors());

app.use('/cred', require('./routes/Cred'));

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})