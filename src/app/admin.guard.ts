import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.authService.roles.forEach(r => {
      if (r === 'adminaaaa') {
        return of(true);
      }
    });

    return this.authService.isLoggedIn$.pipe(
      map(loginStatus => {
        if (loginStatus) {
          this.router.navigate(['/unauthorized']);
          return false;
        } else {
          return false;
        }
      })
    );
  }
}
