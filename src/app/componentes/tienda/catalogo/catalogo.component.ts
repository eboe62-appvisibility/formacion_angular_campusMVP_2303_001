import { Component } from "@angular/core"
import { IEvent } from 'src/interface/iEvent';

@Component({
    selector: "app-catalogo",
    templateUrl: "./catalogo.component.html",
    styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent{
  saludo = "Lista de Eventos disponibles"
  titulos_eve: IEvent[];

  constructor(){
    this.titulos_eve=[
      {titulo_eve:"Fin de Años montañero. Pirineo Aragonés."},
      {titulo_eve:"Navalmedio. Senda Whistler-Pto. de Navacerrada-Las Cabrillas."},
      {titulo_eve:"Noche de Reyes. Refugio Giner de los Ríos. La Pedriza."},
      {titulo_eve:"Little Cuerda Larga. Cuerda de la Vaqueriza-Pico Perdiguera."},
      {titulo_eve:"Cerro de la Camorca- Cerro Pelado. Río Eresma. Boca del Asno."}
    ];
  }

}
