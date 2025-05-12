const express=require('express');
const app=express();
const port=5000;
const db=require('./db1');
const cors=require('cors');

db();

app.use(cors());
app.use(express.json());
app.use('/cred1', require('./routes/Cred1'));
app.use('/book', require('./routes/Travel1'));

app.listen(port, ()=> {
    console.log(`App is listening at port ${port}`);
})