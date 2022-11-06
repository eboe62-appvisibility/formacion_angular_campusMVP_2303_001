import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioValientesService } from '../../servicio-valientes.service';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  @Output() plazaslibres_eveprs = new EventEmitter<string>();

  constructor(private miServicio:ServicioValientesService) { }

  ngOnInit(): void {
  }

actualizarPlazaslibres(value: string){
  this.miServicio.mostrarMensaje(value);
  this.plazaslibres_eveprs.emit(value);
}

}
