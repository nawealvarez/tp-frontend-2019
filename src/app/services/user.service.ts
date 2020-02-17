import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { User } from 'app/models';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiURL}/user/`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    });
  }

  getMe(): Observable<User> {
    return this.http.get<User>(`${environment.apiURL}/user/me`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiURL}/user/${id}`)
  }
}
