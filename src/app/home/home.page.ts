import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public halaman:any = [];

  constructor(public Router: Router) { 
    this.halaman = [
      {
        name:"Instagram",
        url:"instagram/profil"
      },
      {
        name:"XL",
        url:"xl/dashboard"
      }
    ]
  }

  toPage(url:string){
    this.Router.navigate([url])
    console.log("konci")
  }
}
