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
    const currentUser = this.userservice.getCurrentUser();
    cov.user = currentUser;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.userservice.getToken()}`
    });
    return this.httpClient.post(`${this.API_URL}/add-Covoiturage`, cov,{ headers: headers });
  }
  retrieveallCov(): Observable<any> {
    
    return this.httpClient.get(`${this.API_URL}/retrieve-all-Covoiturage`) ;
  }
  addReaction(postId: any, reaction: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.userservice.getToken()}`
    });
    return this.httpClient.post(`${this.API_URL}/reactions/${postId}`, reaction,{ headers: headers })
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private handleError(error: any) {
    console.error(error);
    return throwError('An error occurred');
  }
}
