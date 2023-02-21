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
export class BuyerFormComponent implements OnChanges {
  constructor(private fb:FormBuilder, private db: DataService, private router: Router){}
  buyerForm: FormGroup= this.fb.group({
    buyerWish: [''],
    deviceType: ['laptop'],
    manufacturer:[''],
    model:['']
  })
  ngOnChanges(changes: SimpleChanges){
    console.log('tested');
  }

  manufacturer:string[]=['Lenovo','HP','Dell','Apple','Acer','Asus','Samsung','MSI','Sony','Compaq', "Others"]

  fetchData(event: any){
    //Fetch from UI
    console.log('from UI ' , event.target.value);
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
    });
  }

}
