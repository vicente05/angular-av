import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    //constructor( private authService: AuthService, private router: Router ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //if (this.authService.validarToken().trim() === '' ) {
        //    this.router.navigateByUrl('login');
        //    return false;
        //}
        return true;
    }

}
