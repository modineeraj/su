import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

export class UserauthService {

  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,

  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });

  }

  // Sign up with email/password
  signUp(userSignupData: any) {
    console.log("userSignupData==> ", userSignupData);
    const email = userSignupData.emailMobile.email;
    const password = userSignupData.password;
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("result===> ", result);
        console.log("result.user===> ", result.user);
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
       // this.SendVerificationMail();
       this.SetUserData(result.user, userSignupData);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any, userSignupData: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    console.log("user--> ", user);
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: userSignupData.userName.fullName,
      phoneNumber: userSignupData.emailMobile.mobile,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }
}
