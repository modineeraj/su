import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { __param } from 'tslib';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss']
})
export class ShowItemComponent {

  id: any = '';
  showItemTemp!: any;

  constructor(private db: DataService, private route: ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(param=>{
      this.id = param["id"];
      console.log("this.id ", this.id);
    });
  //Fetch from DB
  // this.db.getAll().snapshotChanges().pipe(
  //   map(changes =>
  //     changes.map(c =>
  //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //     )
  //   )
  // ).subscribe(data => {

  //   this.showItemTemp = data.filter(temp=>{

  //     return temp.id.toString()===this.id.toString()
  //   })[0];
  //   console.log("data in showItemTemp");
  //   console.log(this.showItemTemp);
  // });

  }

}
