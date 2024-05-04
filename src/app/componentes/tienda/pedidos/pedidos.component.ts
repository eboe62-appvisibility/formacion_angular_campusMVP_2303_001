import { Component, OnInit } from '@angular/core';
import { Valiente } from '../../../valiente.model';
import { InscritosService } from '../../../evento/inscritos.service';
import { ServicioValientesService } from '../../../servicio-valientes.service';

@Component({
  selector: 'app-pedidos',
  //templateUrl: './catalogo.component.html',
  //template:"<p>Aquí iria un evento</p>",
  templateUrl: './pedidos.component.html',
  //styleUrls: ['./catalogo.component.css']
  //styles:["p{background-color:red;}"]
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  titulo_eve="Fin de Año montañero. Pirineo Aragonés.";
  fechaidatru_eve="2021-12-28";
  nivel_eve="Medio-alto";
  private nparticipantes_eve=10;
  apodo_prs="...";
  titulo2 = 'PEDIDOS';

  constructor(private miServicio:ServicioValientesService, private inscritosService:InscritosService) {
    //this.valientes = this.inscritosService.valientes;
  }

  ngOnInit(): void {
//    this.valientes = this.inscritosService.valientes;
      this.inscritosService.obtenerValientes().subscribe(
        misInscritos => {console.log(misInscritos);
      this.valientes = Object.values(misInscritos);
      this.inscritosService.setValientes(this.valientes);
    });
  }

  valientes:Valiente[]=[];

  agregarValiente(){
    let valiente = new Valiente(this.cuadroApodo, this.cuadroNombre, this.cuadroPreferencia, this.cuadroEmail);
    //this.miServicio.mostrarMensaje("Apodo del inscrito: " + valiente.apodo_prs)
    this.inscritosService.agregarInscritoServicio(valiente);
    //this.valientes.push(valiente);
  }

  cuadroApodo: string = "";
  cuadroNombre: string = "";
  cuadroPreferencia: number = 0;
  cuadroEmail: string = "";

  llamaApodo_prs(value:string){
  }

  getNparticipantes_eve(){
    return this.nparticipantes_eve;
  }

}

