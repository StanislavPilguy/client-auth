import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../servises/auth.service';

import { Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MaterialService} from "../../../servises/classes/material.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(public authService: AuthService,
              public router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.authService.login(this.form.value.email, this.form.value.password)
			.then((succes) => {
        window.localStorage.setItem('email', (this.form.value.email));
        this.router.navigate(['/main']);
      })
			.catch((err) => {
        if (err.code === 'auth/wrong-password') {
          MaterialService.toast('Такой пароль существует.');
        }
        if (err.code === 'auth/user-not-found') {
          MaterialService.toast('Такого пользователя не существует.');
          this.router.navigate(['auth/register']);
        }
      });
  }


}