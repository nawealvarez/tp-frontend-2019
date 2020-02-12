import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(body): Observable<any> {
    console.log("Hello, there!")
    return this.http.post(`${BASEURL}/auth/signup`, body);
  }
  loginUser(body): Observable<any> {
    let {username, password} = body;
    return this.http.post(`${BASEURL}/auth/login`, null, {
      headers: new HttpHeaders({
        'Authorization': "Basic " +btoa( username + ":" + password)
      })
    });
  }
}
