import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Valiente } from './valiente.model';
import { of } from 'rxjs';

@Injectable()

export class DataServices{

    constructor (private httpClient:HttpClient){}

    guardarValientes(valientes:Valiente[]){
        this.httpClient.put('https://apptravel01-d12e0-default-rtdb.europe-west1.firebasedatabase.app/datos.json', valientes).subscribe(
            response=>console.log("Se han guardado los valientes: " + response),
            error=>console.log("Error: " + error),
        );
    }
}