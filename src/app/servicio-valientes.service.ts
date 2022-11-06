import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioValientesService {

  constructor() { }

  mostrarMensaje(mensaje:string){
    alert(mensaje);
  }

}
