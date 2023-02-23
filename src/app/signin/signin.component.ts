import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  loginForm = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  })

  constructor(private _formBuilder: FormBuilder, private authService: UserauthService) {
    //console.log("firstFormGroup ", this.firstFormGroup);
    //console.log("secondFormGroup ", this.secondFormGroup);
  }
  loginSendData(){
    this.authService.login(this.loginForm.value).subscribe(serverResponse=>{
      console.log("serverResponse-> ", serverResponse);
    });
  }

}
