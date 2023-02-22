import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    firstCtrl: ['Neeraj Modi', [Validators.required,Validators.pattern(this.alphabetPattern)]],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl1: ['', [Validators.required, Validators.email]],
    secondCtrl2: ['123456789833', [Validators.required, Validators.pattern('[0-9]\\d{9}')]],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
    console.log("firstFormGroup ", this.firstFormGroup);
   // console.log("secondFormGroup ", this.secondFormGroup);
  }

}
