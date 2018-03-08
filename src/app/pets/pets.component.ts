import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pageTitle: string = "Pets list";
  pets: Array<Pet>;
  imageWidth: number = 100;
  imageMargin: number = 1;
  listFilter: string;
  showImage: boolean = false;

  constructor(private _petsService : PetsService) { }

  ngOnInit() {
    console.log("acá obtengo datos del backend!");
    this._petsService.getPets().subscribe(
      ((obtainedPets : Array<Pet>) => this.pets = obtainedPets), 
      ((error : any) => console.log(error))
    )
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message:string):void {
    this.pageTitle = "Pets List " + message;
  }
}

