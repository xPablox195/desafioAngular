import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packagedate } from '../interfaces/interfacePackagedate';

@Injectable({
    providedIn: 'root'
})
export class PackagedateService {

    baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private httpClient: HttpClient){
        console.log("Primer Servicio");
    }

    cargarPackagedate(){
        return this.httpClient.get<Packagedate>(this.baseUrl);
    }
}