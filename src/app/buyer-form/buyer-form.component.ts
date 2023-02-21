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
  buyerForm: FormGroup= this.fb.group({
    buyerWish: [''],
    deviceType: [''],
    manufacturer:[''],
    model:['']
  })

  manufacturer:string[]=['Lenovo','HP','Dell','Apple','Acer','Asus','Samsung','MSI','Sony','Compaq', "Others"]

  fetchData(){
    //Fetch from UI
    console.log('from UI ');
    console.log(this.buyerForm.value);
    //Fetch from DB
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log("data in buyer");
      console.log(data);
      this.items = data;
    });
  }
  resetFilter(){
    console.log('inside reset');
    this.buyerForm.reset();
  }

}
