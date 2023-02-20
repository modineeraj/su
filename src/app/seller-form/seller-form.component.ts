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
      ram:[''],
      processor:[''],
      storage:[''],
      stroageType:[''],
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
}
