import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Valiente } from './valiente.model';

@Injectable()

export class DataServices{

    constructor (private httpClient:HttpClient){}

    // READ
    cargarValientes() {
        return this.httpClient.get('https://apptravel01-d12e0-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }

    // CREATE
    guardarValientes(valientes:Valiente[]){
        this.httpClient.put('https://apptravel01-d12e0-default-rtdb.europe-west1.firebasedatabase.app/datos.json', valientes).subscribe(
            response=>console.log("Se han guardado los valientes: " + response),
            error=>console.log("Error: " + error),
        );
    }

    // UPDATE
    actualizarValiente(indice:number, valiente:Valiente){
        let url = 'https://apptravel01-d12e0-default-rtdb.europe-west1.firebasedatabase.app/datos/' + indice + '.json';
        this.httpClient.put(url, valiente).subscribe(
            response=>console.log("Se ha modificado el valiente: " + response),
            error=>console.log("Error: " + error),
        );
    }
}
