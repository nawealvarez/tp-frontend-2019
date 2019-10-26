import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private cookieService:CookieService) { }

  setToken(token: string){
    this.cookieService.set('yaca_token', token);
  }

  getToken(){
    this.cookieService.get('yaca_token');
  }

  deleteToken(){
    this.cookieService.delete('yaca_token');
  }
}
