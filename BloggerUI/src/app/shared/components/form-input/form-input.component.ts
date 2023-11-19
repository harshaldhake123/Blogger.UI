import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-form-input',
    standalone: true,
    imports: [CommonModule, MatFormFieldModule, MatInputModule],
    templateUrl: './form-input.component.html',
    styleUrl: './form-input.component.scss',
})
export class FormInputComponent {}
