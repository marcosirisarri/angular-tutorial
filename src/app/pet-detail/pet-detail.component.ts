import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pet } from "../pets/pet";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pageTitle : string = "Pet detail";
  pet : Pet;

  constructor(private _currentRoute: ActivatedRoute, private _router : Router) { }

  ngOnInit() {
    let id = this._currentRoute.snapshot.params['id'];
	  this.pageTitle +=  ": " + id;
  }

  onBack(): void {
    this._router.navigate(['/pets']); //En caso de que necesite parametros los paso como otros argumentos
  }
}
