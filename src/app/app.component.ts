import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService, private websocketService: WebsocketService) {}

  ngOnInit() {
    const token = this.tokenService.getToken();
    if (token) {
      this.router.navigate(['streams']);
    } else {
      this.router.navigate(['auth']);
    }
    this.websocketService.listen('test event').subscribe((data) =>{
      console.log(data);
    });
  }
}
