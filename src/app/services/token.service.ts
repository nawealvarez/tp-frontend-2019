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
}
