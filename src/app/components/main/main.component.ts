import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../servises/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.user = window.localStorage.getItem('email');
  }

  onLogOut() {
    this.authService.logout()
      .then((success) => this.router.navigate(['/auth/login']))
      .catch((err) => console.log(err));
  }
}
