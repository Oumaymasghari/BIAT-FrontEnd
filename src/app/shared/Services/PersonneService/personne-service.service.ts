import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonneModule } from '../../Module/personne/personne.module';

@Injectable({
  providedIn: 'root'
})
export class PersonneServiceService {
  readonly API_URL = 'http://localhost:8089';
  constructor(private httpClient: HttpClient) { }

  addPersonne(Personne: any,userId:any) {
    console.log(Personne)
    return this.httpClient.post(`${this.API_URL}/add-Personne/${userId}`, Personne);
  }
  retrieveallPersonne(): Observable<any> {
    
    return this.httpClient.get(`${this.API_URL}/retrieve-all-Personne`) ;
  }
  uploadProfilePic(formData: FormData,personneid:any): Observable<any> {
   

    return this.httpClient.post(`${this.API_URL}/uploadProfilePic/${personneid}`, formData, { responseType: 'blob' });
}
getPersonneByUser(userid:any): Observable<any>{
  return this.httpClient.get(`${this.API_URL}/getPersonneByUser/${userid}`);
}
getPersonneByUserId(userid: any): Observable<any> {
 
  return this.httpClient.get(`${this.API_URL}/personne/${userid}`);
}
getProfilePicUrl(userid: any): Observable<any> {
 
  return this.httpClient.get(`${this.API_URL}/getProfilePicUrl/${userid}`, { responseType: 'blob' });
}
getPERSONNEById(id: any) {
    
  return this.httpClient.get(`${this.API_URL}/retrieve-personne/${id}`);
}

}
