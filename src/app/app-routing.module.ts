import { WelcomeLandingComponent } from './welcome-landing/welcome-landing.component';
import { SignUpComponent } from './welcome-landing/sign-up/sign-up.component';
import { LoginComponent } from './welcome-landing/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignUpComponent},
  { path: '',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, SignUpComponent, WelcomeLandingComponent]
