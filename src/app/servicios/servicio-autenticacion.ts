import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Valiente } from '../valiente.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs';
import { LoginService } from '../componentes/usuarios/login/login.service';

@Injectable()

export class ServicioAutenticacion{
    url: string = 'https://apptravel01-d12e0-default-rtdb.europe-west1.firebasedatabase.app/datos';
    token: string;

    constructor (private httpClient:HttpClient, private loginService:LoginService){}

      // READ
    cargarValientes() {
        this.token = this.loginService.getIdToken();
        return this.httpClient.get(this.url + '.json?auth=' + this.token);
    }

    // CREATE
    guardarValientes(valientes:Valiente[]){
      this.httpClient.put(this.url + '.json?auth=' + this.token, valientes).subscribe(
            response=>console.log("Se han guardado los valientes: " + response),
            error=>console.log("Error: " + error),
        );
    }

    // UPDATE
    actualizarValiente(indice:number, valiente:Valiente){
        let url = this.url + '/' + indice + '.json?auth=' + this.token;
        this.httpClient.put(url, valiente).subscribe(
            response=>console.log("Se ha modificado el valiente: " + response),
            error=>console.log("Error: " + error),
        );
    }

    // DELETE
    eliminarValiente(indice:number){
      let url = this.url + '/' + indice + '.json?auth=' + this.token;
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha dado de baja el valiente: " + response),
            error=>console.log("Error: " + error),
        );
    }

}
