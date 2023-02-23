const express=require('express');
const db=require('./db_connect');
const cors=require('cors');
const bodyParser=require('body-parser');
const port=3000;
const router=require('./seller_route');

const app=express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
    credentials:true,
    origin:true}
));


app.use(router);

app.listen(port,()=>{
    console.log('listening on 3000')
})
