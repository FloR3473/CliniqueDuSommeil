import { HttpClient } from '@angular/common/http';
import { Injectable, Service, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  user = signal<any>(null); // Signal qui accepte tout
  constructor(private http: HttpClient, private router: Router) { }; // Injecter dans un constructeur

  login(email: string, password: string) {
    return this.http.post('http://localhost:9000/login',
      {
        "email": email,
        "mdp": password
      }).subscribe({  //subscribe callback, envoie de la requete

        next: result => {  //en cas de reussite 
          this.user.set(result)
          console.log(result);
          this.router.navigate(['layout/dashboard']);
        },
        error: err => {
          console.error(err);
          this.user.set(null);
        }
      });
  }

  recupererUser() {
    return this.user();
  }
clearUser(){
  this.user.set(null);
}
}
