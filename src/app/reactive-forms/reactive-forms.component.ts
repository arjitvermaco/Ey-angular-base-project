import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl('')

  profileForm = new FormGroup({
    firstName : new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName : new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ])
  })

  registerForm: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl((this.hero.name,[
    //     Validators.required,
    //     Validators.minLength(4)
    //   ])),
    // });
  }

  onBtnClick() {
    this.router.navigate(['/child']);
  }

  onSubmit() {
    console.log('Form was submitted');
    console.log(this.profileForm.value);
  }
  updateName() {
    this.name.setValue('John');
  }
}
