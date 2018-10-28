import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {from, Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public afAuth: AngularFireAuth, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return from(this.afAuth.authState)
      .pipe(take(1))
      .pipe(map(e => !!e))
      .pipe(tap(authenticated => {
        if (!authenticated) {
          this.router.navigate(['/auth']);
        }
      }));
  }
}


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router, public afAuth: AngularFireAuth) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return from(this.afAuth.authState)
			.pipe(tap(b => {
          if (b) {
            this.router.navigate(['/']);
          }
        }
      ))
			.pipe(map(e => !e));
  }
}