import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public Router: Router) { 

  }

  toInstagram(){
    this.Router.navigate(['instagram/profil'])
    console.log("konci")
  }
}
