import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})

export class UserauthService {

  userData: any; // Save logged in user data
  constructor(private router: Router, private http: HttpClient,private _snackbar:MatSnackBar) {

  }

  SetUserData(userSignupData: any):Observable<any> {
    return this.http.post<any>("http://localhost:3000/users",userSignupData).pipe(
      tap({
        next:(data)=>{
          console.log('data------> ', data);
          this._snackbar.open('Thank you for registering with us! ','Ok', {duration:4000});
          this.router.navigate(['/']);
        },
        error:(err)=>{
          this._snackbar.open('Error!, something wrong','Ok', {duration:5000});
        }
      })
    );
  }//end of setUserData

  login(loginData: any){
    return this.http.post<any>("http://localhost:3000/userSignIn",loginData).pipe(
      tap({
        next:(data)=>{
          console.log('data------> ', data);
          this._snackbar.open('Welcome Back! ','Ok', {duration:4000});
          this.router.navigate(['/']);
        },
        error:(err)=>{
          this._snackbar.open('Error!, something wrong','Ok', {duration:5000});
        }
      })
    );
  }//end of Login
}
