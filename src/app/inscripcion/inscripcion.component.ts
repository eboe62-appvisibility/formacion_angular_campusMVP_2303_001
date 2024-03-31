import { Component, OnInit } from '@angular/core';
import { Valiente } from '../valiente.model';
import { InscritosService } from '../evento/inscritos.service';
import { ServicioValientesService } from '../servicio-valientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['../modelo/entidades/valiente.component.css']
})
export class InscripcionComponent implements OnInit {
  titulo2 = 'INSCRIPCION';

  constructor(private router: Router, private route: ActivatedRoute, private miServicio:ServicioValientesService, private inscritosService:InscritosService) { }

  ngOnInit(): void {
    this.accion = parseInt(this.route.snapshot.queryParams['accion']);
    this.valientes = this.inscritosService.valientes;
    this.indice = this.route.snapshot.params['id'];
    let valiente:Valiente = this.inscritosService.encontrarInscrito(this.indice);
    this.cuadroApodo = valiente.apodo_prs;
    this.cuadroNombre = valiente.nombre_prs;
    this.cuadroPreferencia = valiente.preferencia_prs;
    this.cuadroEmail = valiente.email_prs;
  }

  valientes:Valiente[]=[];
  indice:number;
  accion:number;

  agregarValiente(){
    let valiente = new Valiente(this.cuadroApodo, this.cuadroNombre, this.cuadroPreferencia, this.cuadroEmail);
    //this.miServicio.mostrarMensaje("Apodo del inscrito: " + valiente.apodo_prs)
    this.inscritosService.agregarInscritoServicio(valiente);
    //this.valientes.push(valiente);
  }
/*
  actualizarValiente() {
    let valiente = new Valiente(this.cuadroApodo, this.cuadroNombre, this.cuadroPreferencia, this.cuadroEmail);
    //this.miServicio.mostrarMensaje("Apodo del inscrito: " + valiente.apodo_prs)
    this.inscritosService.actualizarInscrito(this.indice, valiente);
    this.router.navigate(['evento']);
  }

  bajaValiente() {
    this.inscritosService.eliminarInscrito(this.indice);
    this.router.navigate(['evento']);
  }
*/
actualizarValiente() {
  if (this.accion == 1) {
    let valiente = new Valiente(this.cuadroApodo, this.cuadroNombre, this.cuadroPreferencia, this.cuadroEmail);
    //this.miServicio.mostrarMensaje("Apodo del inscrito: " + valiente.apodo_prs)
    this.inscritosService.actualizarInscrito(this.indice, valiente);
  } else {
    this.inscritosService.eliminarInscrito(this.indice);
  }
  this.router.navigate(['evento'])
  .then(() => {
    window.location.reload();
  });
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

  volverHome() {
    this.router.navigate(['']);
  }

}
