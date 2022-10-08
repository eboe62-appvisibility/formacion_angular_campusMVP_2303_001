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

  habilitacionCuadro=false;
  userRegistrado=false;
  textoRegistro="No hay nadie registrado"

  getRegistroUsuario(){
    this.userRegistrado=false;
  }

  setRegistroUsuario(event:Event){
    //alert ("El usuario se acaba de registrar")
    //this.textoRegistro="El usuario se acaba de registrar"
    //alert(event.target);
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoRegistro="El usuario se acaba de registrar"
    }else{
      this.textoRegistro="No hay nadie registrado"
    }
  }

  llamaApodo_prs(value:string){
  }

  getNparticipantes_eve(){
    return this.nparticipantes_eve;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
