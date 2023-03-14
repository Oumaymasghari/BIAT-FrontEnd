import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostCommentService {
  readonly API_URL = 'http://localhost:8089/PostComment';
  constructor(private httpClient: HttpClient,private userservice: UserService) { }

  addPostComment(pc: any) {
    const currentUser = this.userservice.getCurrentUser();
    pc.user = currentUser;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.userservice.getToken()}`
    });
    return this.httpClient.post(`${this.API_URL}/add-PostComment`, pc,{ headers: headers });
  }
  retrieveallPostComment(): Observable<any> {
    
    return this.httpClient.get(`${this.API_URL}/retrieve-all-PostComment`) ;
  }
}
