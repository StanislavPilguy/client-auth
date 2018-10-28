import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {MainComponent} from "./components/main/main.component";
import {AuthGuard, NoAuthGuard} from "./servises/auth.guard";

const routes: Routes = [
	  {path: '', redirectTo: 'main', pathMatch: 'full'},
   {
    path: 'auth', component: AuthComponent, canActivate: [NoAuthGuard], children: [
      {path: '', redirectTo: 'register', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
];


@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {

}
