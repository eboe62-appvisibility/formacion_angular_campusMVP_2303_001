import { Component, OnInit } from '@angular/core';
import { ServicioValientesService } from '../servicio-valientes.service';
import { Valiente } from '../valiente.model';
import { InscritosService } from './inscritos.service';

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

  constructor(private miServicio:ServicioValientesService, private inscritosService:InscritosService) {
    //this.valientes = this.inscritosService.valientes;
  }

  ngOnInit(): void {
    this.valientes = this.inscritosService.valientes;
  }

  valientes:Valiente[]=[];

  agregarValiente(){
    let valiente = new Valiente(this.cuadroApodo, this.cuadroNombre, this.cuadroPreferencia, this.cuadroEmail);
    //this.miServicio.mostrarMensaje("Apodo del inscrito: " + valiente.apodo_prs)
    this.inscritosService.agregarInscritoServicio(valiente);
    //this.valientes.push(valiente);
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

}

