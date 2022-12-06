import { Injectable } from "@angular/core";
import { DataServices } from "../data.services";
import { ServicioValientesService } from "../servicio-valientes.service";
import { Valiente } from "../valiente.model";
@Injectable()

export class InscritosService {

  constructor(private servicioVentanaEmergente: ServicioValientesService, private dataService:DataServices){}

  valientes:Valiente[]=[
    new Valiente("Mamel","Jose Manuel",9,"mame@gmail.com"),
    new Valiente("Raúl","Raúl",8,"raul@gmail.com"),
    new Valiente("apodo01","valNombre01",4,"apodo01@gmail.com"),
    new Valiente("apodo02","valNombre02",6,"apodo02@gmail.com"),
  ];

  agregarInscritoServicio (valiente:Valiente){
    this.servicioVentanaEmergente.mostrarMensaje("Persona que se va a inscribir: " + "\n" +
    valiente.apodo_prs + "\n" + "eMail: " + valiente.email_prs)
    this.valientes.push(valiente);
    this.dataService.guardarValientes(this.valientes);
  }

  encontrarInscrito (indice:number){
    let valiente:Valiente = this.valientes[indice];
    return valiente;
  }

  actualizarInscrito (indice:number, valiente:Valiente){
    let valienteModificado = this.valientes[indice];
    valienteModificado.apodo_prs = valiente.apodo_prs;
    valienteModificado.nombre_prs = valiente.nombre_prs;
    valienteModificado.preferencia_prs = valiente.preferencia_prs;
    valienteModificado.email_prs = valiente.email_prs;
  }

  eliminarInscrito (indice:number) {
    this.valientes.splice(indice, 1);
  }

}
