import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent {
  constructor(private fb:FormBuilder){}
  sellerForm: FormGroup= this.fb.group({
    deviceType: ['laptop'],
    manufacturer:[''],
    otherManufacturer:[''],
    model:[''],
    serialNumber:[''],
    yearOfManufacture:[''],
    yearOfPurchase:[''],
    configuration:this.fb.group({
      processor:[''],
      ram:[''],
      ramType:[''],
      storage:[''],
      storageHDD:[''],
      storageSSD:[''],
      graphicCard:[''],
      dvd:[''],
      charger:[''],
      battery:['']
    }),
    customized:[''], //y/n
    customConfiguration:[''],
    inWarranty:[''],
    workingMachine:[''],
    howDidItStop:['']
  })

  manufacturer:string[]=['Lenovo','HP','Dell','Apple','Acer','Asus','Samsung','msi']
  hdd:string[]=['128GB','256GB','500GB','1TB','2TB','4TB']
  ssd:string[]=['128GB','256GB','500GB','1TB','2TB']
  ramStorage:string[]=['1GB','2GB','4GB','8GB','16GB']
  ramdrrList:string[]=['DDR2-400','DDR2-533','DDR2-667','DDR2-800','DDR2-1000','DDR3-800','DDR3-1066','DDR3-1333','DDR3-1600','DDR4-2400','DDR4-2666','DDR4-2933','DDR4-3000','DDR4-3200','DDR4-3600','DDR4-4000','DDR4-4400']
}
