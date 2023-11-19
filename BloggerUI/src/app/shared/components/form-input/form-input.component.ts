import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-form-input',
    standalone: true,
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
    ],
    templateUrl: './form-input.component.html',
    styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
    public label!: string;
    public placeholder!: string;
    public inputFormControlName!: string;
    public inputFormGroup!: FormGroup;
    public type: string = 'text';
}
