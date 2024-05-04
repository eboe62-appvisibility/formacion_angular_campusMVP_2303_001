import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'
import { CookieService } from 'ngx-cookie-service'


@Injectable()
export class LoginService {
  token: string;

  constructor (private router:Router, private cookies:CookieService){}

  login(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            console.log("El token es: ");
            console.log(this.token);
            this.cookies.set("Nuestro token", this.token)
            this.router.navigate(['/catalogo']);
          }
        )
      }
    );
  }

  getIdToken() {
//    return this.token;
    return this.cookies.get("Nuestro token");
}

  estaLogueado() {
//    return this.token;
    return this.cookies.get("Nuestro token");
  }

  logout() {
    firebase.auth().signOut().then(()=>{
      this.token="";
      this.cookies.set("Nuestro token", this.token);
      this.router.navigate(["/"]);
    });
  }
}
