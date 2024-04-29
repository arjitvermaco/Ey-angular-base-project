import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  houseId:number =0;
  selectedHouse:any;

  constructor(private route:ActivatedRoute,private housing:HousingService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {this.houseId = params['id']})

    console.log(this.houseId)

    this.selectedHouse = this.housing.getHousingLocationById(Number(this.houseId))
    console.log(this.selectedHouse)
  }
}
