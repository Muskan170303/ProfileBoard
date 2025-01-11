import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/Services/LocalStorageService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private localStorage: LocalStorageService){}

  jsonData:any

  ngOnInit(){
    this.jsonData=JSON.parse(this.localStorage.getItem('userData'))
  }
}
