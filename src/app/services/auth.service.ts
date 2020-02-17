import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body): Observable<any> {
    return this.http.post(`${environment.apiURL}/auth/signup`, body);
  }
  loginUser(body): Observable<any> {
    let {username, password} = body;
    return this.http.post(`${environment.apiURL}/auth/login`, null, {
      headers: new HttpHeaders({
        'Authorization': "Basic " +btoa( username + ":" + password)
      })
    });
  }
}
