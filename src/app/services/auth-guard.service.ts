import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from  '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor ( private router: Router, private authService: AuthService) {}

    canActivate(
        route:ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.isAuth){
            console.log('can activate true');
            return true;
        }else{
            console.log('can activate false');
            this.router.navigate(['/login']);
            return false;
        }
    }


   
}