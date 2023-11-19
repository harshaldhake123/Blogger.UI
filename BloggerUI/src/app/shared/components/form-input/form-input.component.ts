import { Component, Input } from '@angular/core';
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
	@Input() public label!: string;
	@Input() public placeholder!: string;
	@Input() public inputFormControlName!: string;
	@Input() public inputFormGroup!: FormGroup;
	@Input() public type: string = 'text';
}
