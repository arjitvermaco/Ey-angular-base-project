import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HeroComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHeros App';
}
