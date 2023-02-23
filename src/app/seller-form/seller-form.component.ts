import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent {
  constructor(private fb:FormBuilder, private db: DataService, private router: Router){}
  sellerForm: FormGroup= this.fb.group({
    sellerWish: ['I wish to sell Parts only'],
    deviceType: ['laptop'],
    manufacturer:['hp'],
    otherManufacturer:[''],
    model:['123asd'],
    serialNumber:['qsdcccc123'],
    yearOfManufacture:['2016'],
    yearOfPurchase:['2017'],
    configuration:this.fb.group({
      processor:['i5 8gen'],
      ram:['16GB'],
      ramType:['DDR4'],
      storage:['SSD'],
      storageHDD:['256GB'],
      storageSSD:['256GB'],
      graphicCard:['6GB'],
      dvd:['NO'],
      battery:['Original']
    }),
    charger:['Original'],
    customized:['No'], //y/n
    customConfiguration:['No'],
    inWarranty:['Yes'],
    workingMachine:['Yes'],
    howDidItStop:['Dont know']
  })

  manufacturer:string[]=['Lenovo','HP','Dell','Apple','Acer','Asus','Samsung','MSI','Sony','Compaq', "Others"]
  hdd:string[]=['128GB','256GB','500GB','1TB','2TB','4TB']
  ssd:string[]=['128GB','256GB','500GB','1TB','2TB']
  ramStorage:string[]=['1GB','2GB','4GB','8GB','16GB']
  ramdrrList:string[]=['DDR2-400','DDR2-533','DDR2-667','DDR2-800','DDR2-1000','DDR3-800','DDR3-1066','DDR3-1333','DDR3-1600','DDR4-2400','DDR4-2666','DDR4-2933','DDR4-3000','DDR4-3200','DDR4-3600','DDR4-4000','DDR4-4400']

  submit(){
    console.log('tested');
    console.log(this.sellerForm)
    this.db.create(this.sellerForm.value).subscribe(serverResposne=>{
      console.log('server response',serverResposne); 
    });
    this.router.navigate([""]);
  }
}
