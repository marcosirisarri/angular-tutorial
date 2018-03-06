import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Pet } from './pet';

import 'rxjs/add/operator/map';

@Injectable()
export class PetsService {

  private WEB_API_URL: string = 'api/pets/test-api.json';

  constructor(private _httpService: Http) { }

  getPets(): Observable<Array<Pet>> {
    return this._httpService.get(this.WEB_API_URL)
    .map((response : Response) => <Array<Pet>> response.json()
    .do(data => console.log("Los datos obtenidos fueron: " + JSON.stringify(data)))
    .catch(this.handleError));
    /*return [new Pet("1", "Bobby", 4, "Grande", new Date(), 20, "Labrador", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Labrador_retriever_bulaj1.jpg/220px-Labrador_retriever_bulaj1.jpg", 4),
      new Pet("2", "Firulai", 1, "Grande", new Date(), 12, "Chihuahua", "https://www.anipedia.net/imagenes/que-comen-los-perros.jpg", 5),
      new Pet("3", "Luna", 9, "Medio", new Date(), 40, "Golden", "https://wakyma.com/blog/wp-content/uploads/2017/08/Mi-perro-tiene-ronchas-por-alergia", 2),
      new Pet("4", "Toddy", 6, "Chico", new Date(), 32, "Labrador", "https://www.pedigree.es/img/training/brushIMG.jpg", 4)];*/
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
