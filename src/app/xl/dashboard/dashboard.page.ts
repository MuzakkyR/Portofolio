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
        val:7.7,
        ext:'GB'
      },
      {
        icon:'call',
        val:20,
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
