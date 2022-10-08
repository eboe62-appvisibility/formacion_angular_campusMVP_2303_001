import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  //templateUrl: './evento.component.html',
  //template:"<p>Aquí iria un evento</p>",
  templateUrl: './evento.component.html',
  //styleUrls: ['./evento.component.css']
  //styles:["p{background-color:red;}"]
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  titulo_eve="Fin de Año montañero. Pirineo Aragonés.";
  fechaidatru_eve="2021-12-28";
  nivel_eve="Medio-alto";
  private nparticipantes_eve=10;
  apodo_prs="...";

  llamaApodo_prs(value:string){
  }

  getNparticipantes_eve(){
    return this.nparticipantes_eve;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
