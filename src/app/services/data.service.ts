import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath = '/scrap-seller';

  dataRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.dataRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<any> {
    return this.dataRef;
  }

  create(sellerData:any): any {
    return this.dataRef.add({ ...sellerData });
  }

}
