import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ReactionModule } from '../../Module/reaction/reaction.module';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageService {
  readonly API_URL = 'http://localhost:8089/Covoiturage';
  
  constructor(private httpClient: HttpClient,private userservice: UserService) { }

  addCovoiturage(cov: any) {
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.userservice.getToken()}`
    });
    return this.httpClient.post(`${this.API_URL}/add-Covoiturage`, cov,{ headers: headers });
  }
  retrieveallCov(): Observable<any> {
    
    return this.httpClient.get(`${this.API_URL}/retrieve-all-Covoiturage`) ;
  }
  addReaction(postId: any, reaction: any): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        Authorization: `Bearer ${this.userservice.getToken()}`
      })
    };

    return this.httpClient.post(`${this.API_URL}/reactions/${postId}`,JSON.stringify(reaction), httpOptions);
      
  }
  
 
}
