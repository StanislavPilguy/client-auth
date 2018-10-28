import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthComponent} from './components/auth/auth.component';
import {LoginComponent} from './components/auth/login/login.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {MainComponent} from './components/main/main.component';
import {MaterialService} from "./servises/classes/material.service";

// import {RouterModule, Routes} from '@angular/router';
//import {AuthGuard} from './servises/auth.guard';


// const routes: Routes = [
//   {path: '', redirectTo: '/main', pathMatch: 'full'},
//   {
//     path: 'auth', component: AuthComponent, children: [
//       {path: '', redirectTo: 'login', pathMatch: 'full'},
//       {path: 'login', component: LoginComponent},
//       {path: 'register', component: RegisterComponent},
//     ]
//   },
//   {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
// ];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent
  ],
  imports: [
    //RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule
  ],
  providers: [MaterialService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
