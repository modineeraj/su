import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private db: DataService) { }

  ngOnInit(): void {
    this.db.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      console.log("data ");
      console.log(data);
    });
  }

}
