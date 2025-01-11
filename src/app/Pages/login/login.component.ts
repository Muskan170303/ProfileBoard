// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { v4 as uuid } from 'uuid';
import { LoginService } from 'src/app/Services/LoginService.service';
import { LocalStorageService } from 'src/app/Services/LocalStorageService.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  regexValidator= /^[^@]{2,}@[^.]{2,}\.[^.]{2,}$/ ;
  isPasswordVisible = false;
  isValidated =false;

  email: string = '';
  password: string = '';

  ngOnInit(): void {}
  constructor(private loginService: LoginService, private router: Router, private localStorage: LocalStorageService, private toastr: ToastrService){}

  validateForm():boolean{
    this.isValidated= this.password!="" && this.regexValidator.test(this.email)
    return this.isValidated
  }

  onSubmit() {
    if(!this.isValidated){
      return;
    }
    const client_id=uuid();
    const credentials=btoa(`${this.email}:${this.password}`)
    this.loginService.loginMethod(client_id,credentials)
    this.toastr.success('Login Successful!', `Welcome!`);
  }
  
  toggleFunction(){
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordField = document.getElementById("password") as HTMLInputElement;

    if (this.isPasswordVisible) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
}
