import { Valiente } from "../valiente.model";

export class InscritosService {


  valientes:Valiente[]=[
    new Valiente("Mamel","Jose Manuel",9,"mame@gmail.com"),
    new Valiente("Raúl","Raúl",8,"raul@gmail.com"),
    new Valiente("apodo01","valNombre01",4,"apodo01@gmail.com"),
    new Valiente("apodo02","valNombre02",6,"apodo02@gmail.com"),
  ];

  agregarInscritoServicio (valiente:Valiente){
    this.valientes.push(valiente);
  }
}
