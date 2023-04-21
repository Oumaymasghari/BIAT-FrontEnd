import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VenteachatService {
  readonly API_URL = 'http://localhost:8089/Vente';
  constructor(private httpClient: HttpClient,private userservice: UserService) { }
  addvente(formData: FormData) {
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.userservice.getToken()}`,
      
    });
    console.log(formData.get('file'))
    return this.httpClient.post(`${this.API_URL}/addVente`, formData, { headers });
  }
  getAllvente() {
    return this.httpClient.get(`${this.API_URL}/getAllVentes`)
  }

  acceptVente(id: number): Observable<any> {
    
    return this.httpClient.post<VenteachatService>(`${this.API_URL}/accept/${id}`,null) ;
  }
  getAcceptedVentes(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.API_URL}/ventes/accepted`);
  }
}
