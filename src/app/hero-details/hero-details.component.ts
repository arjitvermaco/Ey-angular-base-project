import { Component, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-details.component.html',
  styleUrl: './hero-details.component.css',
})
export class HeroDetailsComponent {
  @Input() hero?: Hero;
}
