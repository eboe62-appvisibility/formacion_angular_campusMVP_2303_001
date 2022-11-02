import { Component, Input, OnInit } from '@angular/core';
import { Valiente } from '../../valiente/valiente.model';

@Component({
  selector: 'app-inscritos',
  templateUrl: './inscritos.component.html',
  styleUrls: ['./inscritos.component.css']
})
export class InscritosComponent implements OnInit {

  @Input() valienteDeLista:Valiente;
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }

}
