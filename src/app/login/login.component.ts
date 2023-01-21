import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../valiente/valiente.component.css']
})
export class LoginComponent implements OnInit {
  titulo1 = 'INICIO DE SESION';
  mensaje = "";
  registrado = false;
  email_prs: string = "";
  contrasenna_prs: string = "";

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(miFormulario:NgForm){
    this.registrado = true
    this.mensaje = " registrado con éxito"
    this.email_prs = miFormulario.value.email_prs
    this.contrasenna_prs = miFormulario.value.contrasenna_prs
    this.loginService.login(this.email_prs, this.contrasenna_prs)
  }

}
