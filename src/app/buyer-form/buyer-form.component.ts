import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.scss']
})
export class BuyerFormComponent {
  constructor(private fb:FormBuilder, private db: DataService, private router: Router){}
  ngOnInit(){
    this.fetchData();
  }
  items: any[] =[];
  itemsTemp: any[] =[];
  buyerForm: FormGroup= this.fb.group({
    buyerWish: [],
    deviceType: [],
    manufacturer:[],
    model:[]
  })

  manufacturer:string[]=['Lenovo','HP','Dell','Apple','Acer','Asus','Samsung','MSI','Sony','Compaq', "Others"]

  fetchData(){


    this.db.getData().subscribe(data=>{
      this.items = data;
    })




    //Fetch from UI
    //console.log('from UI ');
    //console.log(this.buyerForm.value);

    //Fetch from DB
    // this.db.getAll().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
    //     )
    //   )
    // ).subscribe(data => {
    //   // console.log("data in buyer");
    //   // console.log(data);
    //   this.items = data;

    //   //Filter code
    //   console.log('before filter', this.buyerForm.value);
    //   if(this.buyerForm.value.buyerWish==null &&
    //      this.buyerForm.value.deviceType==null &&
    //      this.buyerForm.value.manufacturer==null &&
    //      this.buyerForm.value.model==null ){
    //       this.items = data;
    //   }else{
    //     this.items = data;
    //     if(this.buyerForm.value.buyerWish != null){
    //       this.itemsTemp = this.items.filter(item=>{
    //         if(item.sellerWish === this.buyerForm.value.buyerWish){
    //         //  console.log("inside IFFF", item);
    //           return item;
    //         }
    //       })
    //       this.items = [...this.itemsTemp];
    //     }//buyer if ends
    //     if(this.buyerForm.value.deviceType != null){
    //       this.itemsTemp = this.items.filter(item=>{
    //         if(item.deviceType === this.buyerForm.value.deviceType){
    //         //  console.log("inside 2nd IFFF", item);
    //           return item;
    //         }
    //       })
    //       this.items = [...this.itemsTemp];
    //     }//device type ends
    //     if(this.buyerForm.value.manufacturer != null){
    //       this.itemsTemp = this.items.filter(item=>{
    //         if(item.manufacturer === this.buyerForm.value.manufacturer){
    //          // console.log("inside 3rd IFFF", item);
    //           return item;
    //         }
    //       })
    //       this.items = [...this.itemsTemp];
    //     }//Mfg ends
    //     if(this.buyerForm.value.model != null){
    //       this.itemsTemp = this.items.filter(item=>{
    //         if(item.model === this.buyerForm.value.model){
    //          // console.log("inside 4th IFFF", item);
    //           return item;
    //         }
    //       })
    //       this.items = [...this.itemsTemp];
    //     }//Mfg ends
    //   }

    // });
//
    // {
    //   if(item.sellerWish === this.buyerForm.value.buyerWish ||
    //      item.deviceType === this.buyerForm.value.deviceType ||
    //      item.manufacturer === this.buyerForm.value.manufacturer ||
    //      item.model === this.buyerForm.value.model ){
    //       console.log("inside item filter", item);
    //       return item;
    //   }
   // }
//


  }
  resetFilter(){
    console.log('inside reset');
    this.buyerForm.reset();
  }

}
