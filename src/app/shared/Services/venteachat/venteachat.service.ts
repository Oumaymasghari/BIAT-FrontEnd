import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable, map } from 'rxjs';
import { VenteachatModule } from '../../Module/venteachat/venteachat.module';
import { CreditRequest } from '../../request/CreditRequest.module';

@Injectable({
  providedIn: 'root'
})
export class VenteachatService {
  readonly API_URL = 'http://localhost:8089/Vente';
  constructor(private httpClient: HttpClient,private userservice: UserService) { }
  // addvente(formData: FormData) {
    
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${this.userservice.getToken()}`,
      
  //   });
  //   console.log(formData.get('file'))
  //   return this.httpClient.post(`${this.API_URL}/addVente`, formData, { headers });
  // }
  addVente(file: File, vente: VenteachatModule): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('article', vente.article);
   // formData.append('dateDisponibilite', vente.dateDisponibilite.toString());
    formData.append('prix', vente.prix.toString());
    formData.append('contactNumber', vente.contactNumber.toString());
    formData.append('place', vente.place);
    formData.append('typeVente', vente.typeVente.toString());
    return this.httpClient.post<VenteachatModule>(`${this.API_URL}/addVente`, formData);
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
  deleteAcceptedVentes() {
    return this.httpClient.delete<any[]>(`${this.API_URL}/ventes/delete`);
  }

  calculerCapaciteCredit(request: CreditRequest, idvente: number):any  {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     // Authorization: `Bearer ${this.userservice.getToken()}`,
    //     // 'Content-Type': 'application/json',
    //     responseType: 'text'
    //   }),
    // };
    const url = `${this.API_URL}/credit/${idvente}`;
    return this.httpClient.post(url, request,{responseType: 'text'})
  }
}
