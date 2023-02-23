const mongoose = require("mongoose");
const sellerDataSchema = new mongoose.Schema(
  {
    sellerWish:{type:String,required:false},
    deviceType:{type:String,required:false},
    manufacturer:{type:String,required:true},
    otherManufacturer:{type:String,required:false},
    model:{type:String,required:true},
    serialNumber:{type:String,required:false},
    yearOfManufacture:{type:Number,required:false},
    yearOfPurchase:{type:Number,required:false},

    configuration:{type: Object},

    charger:{type:String,required:false},
    customized:{type:String,required:false},
    customConfiguration:{type:String,required:false},
    inWarranty:{type:String,required:false},
    workingMachine:{type:String,required:false},
    howDidItStop:{type:String,required:false}
  },
  {
      toJSON:{virtuals:true},
      toObject:{virtuals:true},
      timestamps:true
  })
module.exports.sellerDataSchema = sellerDataSchema;
module.exports.sellerModel = new mongoose.model('sellerData',sellerDataSchema);
