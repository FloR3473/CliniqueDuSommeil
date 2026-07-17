import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NuitService {
    constructor(private http: HttpClient){ };

    getMedecins(){
    return this.http.get('http://localhost:9000/medecins_validateurs');
    }

    getNuitsNonTraitees(){
    return this.http.get('http://localhost:9000/nuitEtude');
    }
}
