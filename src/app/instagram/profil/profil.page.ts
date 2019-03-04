import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  public storyArchieve:any = [];
  public cta:any = [];
  public timelineOption:any = [];
  public footerIcon:any = [];
  public postList:any = [];
  

  constructor() {
    this.storyArchieve = [
      {
        thumbnail:"assets/instagram/add_story.svg",
        name:"New"
      },
      {
        thumbnail:"assets/instagram/kopi3.jpg",
        name:"Quote"
      },
      {
        thumbnail:"assets/instagram/kopi2.jpg",
        name:"Manchester"
      },
    ]

    this.cta = [
      'Call',
      'Email'
    ]

    this.timelineOption = [
      "grid",
      "phone-portrait",
      "star",
      "people" 
    ]

    this.footerIcon=[
      "home",
      "search",
      "ios-add-circle-outline",
      "heart-empty",
    ]

    this.postList = [
      "assets/instagram/rose.jpg",
      "assets/instagram/hands.jpg",
      "assets/instagram/rose.jpg",
      "assets/instagram/kopi1.jpg",
      "assets/instagram/kopi2.jpg",
      "assets/instagram/kopi3.jpg"
      
      
    ]
   }

  ngOnInit() {
  }

}
