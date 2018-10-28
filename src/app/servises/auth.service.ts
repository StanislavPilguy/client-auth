import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    public router: Router
  ) {
  }

  login(email, password) {
    return (this.afAuth.auth.signInWithEmailAndPassword(email, password));
  }

  register(email, password) {
    return (this.afAuth.auth.createUserWithEmailAndPassword(email, password));
  }

  logout() {
    window.localStorage.removeItem('displayName');
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('picture');
    return (this.afAuth.auth.signOut());
  }

  // method to retreive firebase auth after login redirect
  redirectLogin() {
    return this.afAuth.auth.getRedirectResult();
  }
}
