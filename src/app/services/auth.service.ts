import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "environments/environment";
import { isNullOrUndefined } from "util";
import { User } from 'app/models';
import { map } from "rxjs/operators";

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
    }).pipe(map(data =>data));
  }

  setUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getCurrentUser(): User {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }
}
