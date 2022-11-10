import { Component, OnInit } from '@angular/core';
import { ServicioValientesService } from '../servicio-valientes.service';
import { Valiente } from '../valiente.model';

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
  titulo2 = 'INSCRIPCION';

  valientes:Valiente[]=[
    new Valiente("Mamel","Jose Manuel",9,"mame@gmail.com"),
    new Valiente("Raúl","Raúl",8,"raul@gmail.com"),
    new Valiente("apodo01","valNombre01",4,"apodo01@gmail.com"),
    new Valiente("apodo02","valNombre02",6,"apodo02@gmail.com"),
  ];

  agregarValiente(){
    let valiente = new Valiente(this.cuadroApodo, this.cuadroNombre, this.cuadroPreferencia, this.cuadroEmail);
    this.miServicio.mostrarMensaje("Apodo del inscrito: " + valiente.apodo_prs)
    this.valientes.push(valiente);
  }

  cuadroApodo:string="";
  cuadroNombre:string="";
  cuadroPreferencia:number=0;
  cuadroEmail:string="";

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
  constructor(private miServicio:ServicioValientesService) { }

  ngOnInit(): void {
  }

}
