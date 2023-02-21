import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = '/scrap-seller';

  dataRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore, private _snackbar:MatSnackBar) {
    this.dataRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.dataRef;
  }

  create(sellerData:any): any {
    this._snackbar.open('Thank you!, You will be notified on your dashboard once buyer shows interest!','Ok', {duration:4000});
    return this.dataRef.add({ ...sellerData });
  }



}
