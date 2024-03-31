import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['../../../app.component.css']
})
export class CabeceraComponent implements OnInit {
  title = 'TITLE: ';

  constructor() { }

  ngOnInit(): void {
  }

}
