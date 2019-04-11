import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  period:any=Date.now();
  dataUsage:any = []

  constructor() {
    this.dataUsage = [
      {
        icon:'swap',
        val:null,
        ext:'GB'
      },
      {
        icon:'call',
        val:null,
        ext:'min(s)'
      },
      {
        icon:'chatboxes',
        val:null,
        ext:'SMS'
      }
    ]
   }

  ngOnInit() {
  }

}
