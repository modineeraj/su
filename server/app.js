const express=require('express');
const db=require('./db_connect');
const cors=require('cors');
const bodyParser=require('body-parser');
const port=process.env.PORT||3000;

const app=express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
    credentials:true,
    origin:true}
));

app.listen(port,()=>{
    console.log('listening on 3000')
})
