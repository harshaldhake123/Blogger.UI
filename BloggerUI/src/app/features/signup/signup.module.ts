import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { FormInputComponent } from '../../shared/components/form-input/form-input.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    FormInputComponent
  ],
  exports: [SignupComponent]
})
export class SignupModule { }
