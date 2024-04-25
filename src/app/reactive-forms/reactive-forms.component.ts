import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  constructor(private router:Router){

  }

  onBtnClick(){
    this.router.navigate(['/child'])
  }
}
