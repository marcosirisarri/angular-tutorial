import { Component, OnInit } from '@angular/core';

import { Pet } from "../pets/pet";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pageTitle : string = "Pet detail";
  pet : Pet;

  constructor() { }

  ngOnInit() {
  }

}
