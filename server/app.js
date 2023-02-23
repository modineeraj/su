const express=require('express');
const db=require('./db_connect');
const cors=require('cors');
const bodyParser=require('body-parser');
const port=3000;
const sellerRouter=require('./seller_route');
const userRouter=require('./user_route');

const app=express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
    credentials:true,
    origin:true}
));


app.use(sellerRouter);
app.use(userRouter);

app.listen(port,()=>{
    console.log('listening on 3000')
})
