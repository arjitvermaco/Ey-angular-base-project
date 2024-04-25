import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  inputName : string  = "";
  inputEmail: string = "";

  onFormSubmit(){
    console.log("Name", this.inputName)
    console.log("Email", this.inputEmail)

  }
}
