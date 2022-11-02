import { Component, OnInit } from '@angular/core';
import { IEvent } from 'src/interface/iEvent';
@Component({
  selector: 'app-valiente',
  templateUrl: './valiente.component.html',
  styleUrls: ['./../app.component.css', './valiente.component.css']

})
export class ValienteComponent implements OnInit {
  titulo1 = 'INICIO DE SESION';
  mensaje = "";
  registrado = false;
  email_prs: string = "";
  contrasenna_prs: string = "";
  titulos_eve: IEvent[];

  constructor(){
    this.titulos_eve=[
      {titulo_eve:"Fin de Año montañero. Pirineo Aragonés."},
      {titulo_eve:"Navalmedio. Senda Whistler-Pto. de Navacerrada-Las Cabrillas."},
      {titulo_eve:"Noche de Reyes. Refugio Giner de los Ríos. La Pedriza."},
      {titulo_eve:"Little Cuerda Larga. Cuerda de la Vaqueriza-Pico Perdiguera."},
      {titulo_eve:"Cerro de la Camorca- Cerro Pelado. Río Eresma. Boca del Asno."}
    ];
  }

  registrarUsuario() {
    this.registrado = true
    this.mensaje = " registrado con éxito"
  }

  ngOnInit(): void {
  }

}
