import { Component } from '@angular/core';
import { IEvent } from 'src/interface/iEvent';
import { Valiente } from './valiente.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TITLE: ';
  saludo = "Lista de Eventos disponibles"
  titulo = 'Inicio de Sesión';
  mensaje = "";
  registrado = false;
  email_prs: string = "";
  contrasenna_prs: string = "";
  titulos_eve: IEvent[];

  valientes:Valiente[]=[];

  cuadroApodo:string="";
  cuadroNombre:string="";
  cuadroPreferencia:number=0;
  cuadroEmail:string="";


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

}
