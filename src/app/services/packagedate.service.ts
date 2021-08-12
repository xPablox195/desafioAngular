import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Packagedate, PackageIdPost } from '../interfaces/interfacePackagedate';
import { Observable } from 'rxjs';
import { Package } from '../clases/package.model';

@Injectable({
    providedIn: 'root'
})
export class PackagedateService {

    baseUrl: string = 'https://jsonplaceholder.typicode.com/posts';


    constructor(private httpClient: HttpClient){
        console.log("Primer Servicio");
    }

    cargarPackagedate(): Observable<Packagedate[]>{
        return this.httpClient.get<Packagedate[]>(this.baseUrl);
    }

    cargarPackageIdPosts(idPost : number): Observable<PackageIdPost[]>{
        return this.httpClient.get<PackageIdPost[]>('https://jsonplaceholder.typicode.com/posts/'+idPost+'/comments');
    }

    postPackageIdPost(packageDataObjet: Package): Observable<Packagedate>{
        return this.httpClient.post<Packagedate>('https://jsonplaceholder.typicode.com/posts', packageDataObjet);
    }
}