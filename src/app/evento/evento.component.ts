import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
