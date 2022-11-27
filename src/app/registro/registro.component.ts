import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../valiente/valiente.component.css']
})
export class RegistroComponent implements OnInit {
  titulo1 = 'INICIO DE SESION';
  titulo = 'Inicio de Sesión';
  mensaje = "";
  registrado = false;
  email_prs: string = "";
  contrasenna_prs: string = "";

  constructor() { }

  registrarUsuario() {
    this.registrado = true
    this.mensaje = " registrado con éxito"
  }

  ngOnInit(): void {
  }

}
