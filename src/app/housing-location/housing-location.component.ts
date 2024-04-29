import { Component, Input ,OnInit} from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;

  ngOnInit(): void {
    console.log(this.housingLocation)
  }
}
