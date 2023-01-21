import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import firebase from  'firebase/compat/app'
import 'firebase/compat/auth'


@Injectable()
export class LoginService {
  token: string;

  constructor (private router:Router){}

  login(email:string, password:string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            console.log("El token es: ");
            console.log(this.token);
            this.router.navigate(['/evento']);
          }
        )
      }
    );
  }

  getIdToken() {
    return this.token;
  }

  estaLogueado() {
    return this.token;
  }

  logout() {
    firebase.auth().signOut().then(()=>{
      this.token="";
      this.router.navigate(["/"]);
    });
  }
}
