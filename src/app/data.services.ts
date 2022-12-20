import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Valiente } from './valiente.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable()

export class DataServices{
    url: string = 'https://apptravel01-d12e0-default-rtdb.europe-west1.firebasedatabase.app/datos';

    constructor (private httpClient:HttpClient, private loginService:LoginService){}

      // READ
    cargarValientes() {
        const token=this.loginService.getIdToken();
        return this.httpClient.get(this.url + '.json' + token);
    }

    // CREATE
    guardarValientes(valientes:Valiente[]){
        this.httpClient.put(this.url + '.json', valientes).subscribe(
            response=>console.log("Se han guardado los valientes: " + response),
            error=>console.log("Error: " + error),
        );
    }

    // UPDATE
    actualizarValiente(indice:number, valiente:Valiente){
        let url = this.url + '/' + indice + '.json';
        this.httpClient.put(url, valiente).subscribe(
            response=>console.log("Se ha modificado el valiente: " + response),
            error=>console.log("Error: " + error),
        );
    }

    // DELETE
    eliminarValiente(indice:number){
        let url = this.url + '/' + indice + '.json';
        this.httpClient.delete(url).subscribe(
            response=>console.log("Se ha dado de baja el valiente: " + response),
            error=>console.log("Error: " + error),
        );
    }

}
