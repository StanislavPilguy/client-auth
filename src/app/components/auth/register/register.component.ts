import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../servises/auth.service';
import {Router} from '@angular/router';
import {MaterialService} from '../../../servises/classes/material.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }


  onSubmit() {
    this.authService.register(this.form.value.email, this.form.value.password)
			.then((succes) => {
        window.localStorage.setItem('email', (this.form.value.email));
        this.router.navigate(['/main']);
      })
			.catch((err) => {
        if (err.code === 'auth/wrong-password') {
          MaterialService.toast('');
        }
        if (err.code === 'auth/email-already-in-use') {
          MaterialService.toast('Такой пользователь существует.');
          this.router.navigate(['auth/login']);
        }
      });
  }

}
