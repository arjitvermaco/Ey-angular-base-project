import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
 hero : Hero = {
  id:1,
  name:"Windstorm"
 }

 heros = HEROES;

 selectedHero?:Hero;

 onSelect(hero:Hero){
  console.log(hero)
  this.selectedHero = hero;
 }
}
