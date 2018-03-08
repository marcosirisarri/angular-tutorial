import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class PetDetailGuardService {

  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id =+ route.url[1].path;
    if (isNaN(id) || id < 1) {
        alert('La id de la mascota no es valida');
        // redirigimos (a traves de una navegacion), a /pets
        this._router.navigate(['/pets']);
        // abortamos la navegacion actual
        return false;
    };
    return true;
}
}
