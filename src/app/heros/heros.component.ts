import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  hero : Hero = {
    id:1,
    name:'Superman'
  }

  allHeros:Hero[] = HEROES

  selectedHero?:Hero;

  onSelect(hero:Hero){
    console.log(hero)
    this.selectedHero = hero;
  }
}
