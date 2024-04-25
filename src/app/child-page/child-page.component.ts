import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-child-page',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './child-page.component.html',
  styleUrl: './child-page.component.css'
})
export class ChildPageComponent {

}
