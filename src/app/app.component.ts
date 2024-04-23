import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HerosComponent } from './heros/heros.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HerosComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SuperHeros App';
}
