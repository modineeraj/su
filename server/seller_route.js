const express=require('express');
const router=express.Router();
const sellerModel=require('./seller_model').sellerModel;

router.post('/seller', async (req,res)=>{
  const sellerUIData=req.body;
  console.log(sellerUIData);
  try {
    const sellerDBData= await sellerModel.create(sellerUIData);
    res.json(sellerDBData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
}
})
router.get('/sellerData',async (req,res)=>{
    try {
        const sellerDBData= await sellerModel.find();
        res.json(sellerDBData);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

module.exports=router;
