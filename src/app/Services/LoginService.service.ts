import { Injectable } from '@angular/core';
import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { v4 as uuid } from 'uuid';
import { LocalStorageService } from './LocalStorageService.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient, private router: Router, private localStorage: LocalStorageService){}
    ngOnInit(): void {}

    public async loginMethod(client_id:any, credentials:any){
        
        let requestBody={
          "client_id":client_id
        }
        let requestHeader=new HttpHeaders({
          'Accept':'application/json',
          'Content-Type':'application/json',
          'Authorization':`Basic ${credentials}`
        })
        this.setLocalStorage(requestBody,requestHeader)
        console.log("Login Form Submitted!");
    }
    setLocalStorage(requestBody:any, requestHeader:any){
      this.http.post('https://dev2.athmin.com/hopfirst/api/user/sessions',requestBody, {headers:requestHeader,observe:'response'})
        .subscribe((res: HttpResponse<any>)=>{
            console.log(res)
            const userData = {
                'user_id': res.body.user_id,
                'first_name': res.body.first_name,
                'last_name': res.body.last_name,
                'email': res.body.email,
              };
              localStorage.setItem('userData', JSON.stringify(userData));
              localStorage.setItem('x-auth-token', res.headers.get('x-auth-token') || "");
              localStorage.setItem('refresh-token', res.headers.get('refresh-token') || "");
              this.router.navigate(['/dashboard'])
        })
    }

    isRouteAllowed(): boolean {
      return !!localStorage.getItem('x-auth-token');
    }
  
}