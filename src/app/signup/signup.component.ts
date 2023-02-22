import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserauthService } from '../services/userauth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class SignupComponent {
  alphabetPattern = /^[a-zA-Z" "]+$/;
  firstFormGroup = this._formBuilder.group({
    fullName: ['', [Validators.required,Validators.pattern(this.alphabetPattern)]],
  });
  secondFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]\\d{9}')]],
  });
  thirdFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
  });

  userFormGroup = this._formBuilder.group({
    userName: this.firstFormGroup,
    emailMobile: this.secondFormGroup,
    address: this.thirdFormGroup,
    password: [''],
    active: [true],
  })

  constructor(private _formBuilder: FormBuilder, private authService: UserauthService) {
    //console.log("firstFormGroup ", this.firstFormGroup);
    //console.log("secondFormGroup ", this.secondFormGroup);
  }

  signup(){
    console.log("userFormGroup-->", this.userFormGroup.value);
    this.authService.signUp(this.userFormGroup.value);

  }

}
