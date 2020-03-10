import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { UserMessages } from 'app/models/usermessages';
import {User} from 'app/models/user';


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
    return this.http.get<User>(`${environment.apiURL}/user/me`,{
      headers: new HttpHeaders({
        'Authorization':  `Bearer ${this.tokenService.getToken()}`
      })
    });
  }


  getUser(id: string): Observable<UserMessages> {
    return this.http.get<UserMessages>(`${environment.apiURL}/user/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`,
        'Cache-Control':  'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        'Pragma': 'no-cache',
        'Expires': '0'
      })
    });
  }
}
