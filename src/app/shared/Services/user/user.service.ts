import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthResponseModule } from '../../Module/auth-response/auth-response.module';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {
  readonly API_URL = 'http://localhost:8089/api/auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
 
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

  signin(username: string ,password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.API_URL}/signin`, { username, password }, { headers })
      .pipe(map(response => {
        if (response && response.accessToken) {
       
       // localStorage.setItem('currentUser', JSON.stringify({ user, token }));
       // this.currentUserSubject.next({ user, token });
       localStorage.setItem('accessToken', response.accessToken);
        console.log(localStorage.getItem('accessToken'));
        }
        return response;
      }));
  }
  signup(username: any, email: any, password: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/signup`,
      {
        username,
        email,
        password,
        
      },
      httpOptions
    );
  }
    

  logout(): void {
    localStorage.removeItem('token');
  }

  // isLoggedIn(): boolean {
  //   const token = localStorage.getItem('token');
  //   return token !== null;
  // }

  getToken(): string {
    return localStorage.getItem('accessToken') || '';
  }
  setCurrentUser(user: any) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
   
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return currentUser.username;
    }
    return null;
  }

  isLoggedIn() {
    return this.getCurrentUser() != null;
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('accessToken');
    return token !== null && !this.isTokenExpired(token);
  }
  private isTokenExpired(token: string): boolean {
    const expiration = (JSON.parse(atob(token.split('.')[1]))).exp;
    return Math.round((new Date()).getTime() / 1000) >= expiration;
  }

  getUserById(id: any) {
    
    return this.http.get(`${this.API_URL}/users/${id}`);
  }



  }

