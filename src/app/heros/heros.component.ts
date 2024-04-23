import { Component ,OnInit} from '@angular/core';
import { Hero } from '../interfaces/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { AddHeroComponent } from '../add-hero/add-hero.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailsComponent,AddHeroComponent,HttpClientModule],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css',
  providers:[HttpClient]
})
export class HerosComponent implements OnInit {
  hero : Hero = {
    id:1,
    name:'Superman'
  }

  allHeros:Hero[] = HEROES

  selectedHero?:Hero;

  allProducts:any = [];


  constructor(private httpClient : HttpClient){
    console.log("Component Is loaded!!")
    //We to use initialise objects , or service

  }

  ngOnInit(): void {
    console.log("Component Is Initialized!!")
    //Actually data fetching and impementation is done here!!
    this.httpClient.get('https://fakestoreapi.com/products').subscribe(data =>{this.allProducts = data})
  }

  onSelect(hero:Hero){
    console.log(hero)
    this.selectedHero = hero;
  }

  onAddSuperHero(heroname:string){
    console.log("Hero name from parent", heroname)
    this.allHeros.push({
      id:this.allHeros.length+1,
      name:heroname
    })
  }
}
