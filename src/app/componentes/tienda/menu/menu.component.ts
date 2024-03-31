import { Component, OnInit } from '@angular/core';
import firebase from  'firebase/compat/app';
import { LoginService } from '../../../componentes/usuarios/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyArHL0y1cNuDEG_2n3nngjtV4fwNm4u-jY",
      autDomain: "apptravel01-d12e0",
    })
  }

  estaLogueado() {
    return this.loginService.estaLogueado();
  }

  logout() {
    this.loginService.logout();
  }
}
