import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './Pages/home/home.component';
import { AuthGuard } from './Guard/AuthGuard.guard';
import { LoginGuard } from './Guard/LoginGuard.guard';

const routes: Routes = [
  {path:"dashboard", component: HomeComponent, canActivate: [AuthGuard]},
  {path:"login", component: LoginComponent, canActivate: [LoginGuard]},
  {path:"signup", component: SignupComponent, canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
