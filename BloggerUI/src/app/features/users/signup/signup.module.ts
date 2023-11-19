import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { FormInputComponent } from '../../../shared/components/form-input/form-input.component';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SignupComponent],
    imports: [
        CommonModule,
        SignupRoutingModule,
        FormInputComponent,
        ReactiveFormsModule,
    ],
})
export class SignupModule {}
