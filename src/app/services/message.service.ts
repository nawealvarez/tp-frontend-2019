import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message, User } from 'app/models';
import { environment } from 'environments/environment';
import { TokenService } from './token.service';
import { map } from "rxjs/operators";
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { UserMessages } from 'app/models/usermessages';


@Injectable({
  providedIn: 'root'
})

export class MessageService {
  
  
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private userService: UserService
    ) { }
    
  getAll() {
    return this.http.get<Message>(`${environment.apiURL}/api/messages`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    })
  }

  getAllByUser(user: User): Observable<UserMessages> {
    return this.http.get<UserMessages>(`${environment.apiURL}/user/${user._id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.tokenService.getToken()}`
      })
    });
  }
  
  createMessage(content: String, receptor: User) {
      return this.http.post(
        `${environment.apiURL}/api/message/`,
        {'receptor': receptor._id, 'content': content},
        {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.tokenService.getToken()}`
        })
      })
  }
}
