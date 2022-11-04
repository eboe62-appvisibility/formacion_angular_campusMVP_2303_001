import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  @Output() plazaslibres_eveprs = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

actualizarPlazaslibres(value: string){
  this.plazaslibres_eveprs.emit(value);
}

}
