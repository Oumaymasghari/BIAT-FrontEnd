import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PostCommentModule } from '../../Module/post-comment/post-comment.module';
import { ReactionModule } from '../../Module/reaction/reaction.module';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageService {
  readonly API_URL = 'http://localhost:8089/Covoiturage';
  readonly api = 'http://localhost:8089/PostComment';
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
  retrievecovbyid(covid): Observable<any> {
    
    return this.httpClient.get(`${this.API_URL}/retrieve-Covoiturage/${covid}`) ;
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
  addComment(covoiturageId: number, comment:PostCommentModule): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=UTF-8',
        Authorization: `Bearer ${this.userservice.getToken()}`
      })
    };
    return this.httpClient.post(`${this.API_URL}/comments/${covoiturageId}`,JSON.stringify(comment), httpOptions);
  }
  retrieveallcomment(): Observable<any> {
    
    return this.httpClient.get(`${this.api}/retrieve-all-PostComment`) ;
  }
  getCommentsByPostId(postId): Observable<any> {
    
    return this.httpClient.get<PostCommentModule[]>(`${this.api}/retrieve-PostComment/${postId}`) ;
  }
}
