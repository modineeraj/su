const express=require('express');
const router=express.Router();
//const f=require('../data');
const sellerModel=require('../sellerModel').sellerModel;

router.post('/sellerData', async (req,res)=>{
  const sellerUIData=req.body;
  try {
    const sellerDBData= await sellerModel.create(sellerUIData);
    res.json(sellerDBData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
}
})
// router.get("/foods/seed",async(req,res)=>{
//     const foodCount= await sellerModel.countDocuments();
//     if(foodCount>0){
//         res.send("Seed is already done!");
//         return;
//     }
//     await sellerModel.create(f.food);
//     res.send("Seed is done!");
// })

//GET - route for food data
router.get('/sellerData',async (req,res)=>{
    try {
        const sellerDBData= await sellerModel.find();
        res.json(sellerDBData);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

//route for food search
// router.get('/foods/search/:searchTerm',async(req,res)=>{
//     const searchTerm = new RegExp(req.params.searchTerm,'i');
//     console.log(searchTerm);
//     // const foods=f.food.filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
//     const foods= await sellerModel.find({name:searchTerm})
//     res.send(foods);
// })

//route for food by id
// router.get('/foods/:foodId',async(req,res)=>{
//     const foodId = req.params.foodId;
//     console.log("foodid",foodId);
//     const food = await sellerModel.findById(foodId);
//     res.send(food);
// })

module.exports=router;
