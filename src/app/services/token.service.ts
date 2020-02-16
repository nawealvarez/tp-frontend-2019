import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private cookieService: CookieService) {}

  setToken(token) {
    this.cookieService.set('yaca_token', token);
  }

  getToken() {
    return this.cookieService.get('yaca_token');
  }

  deleteToken() {
    this.cookieService.delete('yaca_token');
  }

  getPayload(){
    const token = this.getPayload();
    let payload;
    if (token){
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));
    }
    return payload.data;
  }
}
