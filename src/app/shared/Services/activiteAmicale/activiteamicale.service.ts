import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { ActiviteAmicaleModule } from '../../Module/activite-amicale/activite-amicale.module';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ActiviteamicaleService {
  readonly API_URL = 'http://localhost:8089/activiteAmicale';
  readonly api = 'http://localhost:8089/AAComment';
  
constructor(private httpClient: HttpClient,private userservice: UserService) { }

addAA(file: File, activiteAmicle: ActiviteAmicaleModule): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('file', file);
 
 // formData.append('dateDisponibilite', vente.dateDisponibilite.toString());
  formData.append('cathegorie', activiteAmicle.cathegorie.toString());
  formData.append('description', activiteAmicle.description.toString());
  

  return this.httpClient.post<ActiviteAmicaleModule>(`${this.API_URL}/addActiviteAmicale`, formData);
}
getAllAA() {
  const headers = new HttpHeaders({
    Authorization: `Bearer ${this.userservice.getToken()}`
  });
  return this.httpClient.get(`${this.API_URL}/getAllActiviteAmicale`,{ headers: headers })
}
addReaction(aaId: any, reaction: any): Observable<any> {
    
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8',
      Authorization: `Bearer ${this.userservice.getToken()}`
    })
  };

  return this.httpClient.post(`${this.API_URL}/reactions/${aaId}`,JSON.stringify(reaction), httpOptions);
    
}
addComment(AAId: number, comment:any): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8',
      Authorization: `Bearer ${this.userservice.getToken()}`
    })
  };
  return this.httpClient.post(`${this.API_URL}/comments/${AAId}`,JSON.stringify(comment), httpOptions);
}
getCommentsByAAId(postId): Observable<any> {
    
  return this.httpClient.get<any[]>(`${this.api}/retrieve-AAComment/${postId}`) ;
}
getFilterWordCount(): Observable<any> {
    
  return this.httpClient.get<any[]>(`${this.api}/getFilterWordCount`) ;
}
getActiviteAmicales(cathegorie:any): Observable<any> {
    
  return this.httpClient.get<any[]>(`${this.api}/getActiviteAmicalesByCategory/${cathegorie}`) ;
}
}
