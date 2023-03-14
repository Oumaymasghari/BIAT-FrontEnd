import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {
  readonly API_URL = 'http://localhost:8089/SpringMVC/personne';
  constructor(private httpClient: HttpClient) { }

  addPersonne(Personne: any) {
    console.log(Personne)
    return this.httpClient.post(`${this.API_URL}/add-Personne`, Personne);
  }
}
