import { Component, OnInit } from '@angular/core';
import { Valiente } from '../valiente.model';
import { InscritosService } from '../evento/inscritos.service';
import { ServicioValientesService } from '../servicio-valientes.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['../valiente/valiente.component.css']
})
export class InscripcionComponent implements OnInit {
  titulo2 = 'INSCRIPCION';

  constructor(private miServicio:ServicioValientesService, private inscritosService:InscritosService) { }

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
  textoRegistro="No hay nadie registrado"
  userRegistrado=false;

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

}
