import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, tap } from 'rxjs';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {
//  private dbPath = '/scrap-seller';

//  dataRef: AngularFirestoreCollection<any>;

  // constructor(private db: AngularFirestore, private _snackbar:MatSnackBar) {
  //   this.dataRef = db.collection(this.dbPath);
  // }

  // getAll(): AngularFirestoreCollection<any> {
  //   return this.dataRef;
  // }

  constructor(private _snackbar:MatSnackBar, private http:HttpClient){

  }
  create(sellerData:any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/seller',sellerData).pipe(
      tap({
        next:(data)=>{
          console.log('data------> ', data);
          this._snackbar.open('Thank you!, You will be notified on your dashboard once buyer shows interest!','Ok', {duration:4000});
        },
        error:(err)=>{
          this._snackbar.open('Error!, something wrong','Ok', {duration:4000});
        }
      })
    );
    
   // return this.dataRef.add({ ...sellerData });
  }


  getData():Observable<any>{
    return this.http.get<any>('http://localhost:3000/sellerData')
  }


}
