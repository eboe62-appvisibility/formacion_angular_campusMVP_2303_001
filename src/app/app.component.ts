import { Component, OnInit } from '@angular/core';
import firebase from  'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TITLE: ';

  constructor(){
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyArHL0y1cNuDEG_2n3nngjtV4fwNm4u-jY",
      autDomain: "apptravel01-d12e0",
    })
  }

}
