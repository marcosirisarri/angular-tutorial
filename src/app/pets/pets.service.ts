import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Pet } from './pet';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; //para manejar excepciones
import 'rxjs/add/operator/do'; //para hacer algo cada vez que llega una request (ej: loggear y ver que llegó.

@Injectable()
export class PetsService {

  private WEB_API_URL: string = 'http://localhost:3000/pets';

  constructor(private _httpService: Http) { }

  getPets(): Observable<Array<Pet>> {
    return this._httpService.get(this.WEB_API_URL)
    .map((response : Response) => <Array<Pet>> response.json())
    .do(data => console.log("Los datos obtenidos fueron: " + JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}
