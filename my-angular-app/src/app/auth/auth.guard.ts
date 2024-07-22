import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    const isLoginRoute = state.url.includes('/auth/login');


    if ( !token && isLoginRoute ) { // gak perlu isLoginRoute
      return true;
    } else if ( token && isLoginRoute ) {
      this.router.navigate(['/rncp-title']);
      return false;
    } else if ( !token && !isLoginRoute ) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
