import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css'
})
export class AddHeroComponent {
  @Output() addSuperhero = new EventEmitter<string>();

  newHeroName : string = ""

  onSubmit(){
    console.log(this.newHeroName)
    this.addSuperhero.emit(this.newHeroName)
    this.newHeroName = ""
  }
}
