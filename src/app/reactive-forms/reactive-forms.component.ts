import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  name = new FormControl('')

  profileForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl('')

  })

  constructor(private router:Router){

  }

  onBtnClick(){
    this.router.navigate(['/child'])
  }

  onSubmit(){
    console.log("Form was submitted")
    console.log(this.profileForm.value)
  }
  updateName(){
    this.name.setValue("John")
  }
}
