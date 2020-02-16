import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'app/services/token.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  user: any;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit() {
    this.user = this.tokenService.getPayload();
  }

  logout() {
    this.tokenService.deleteToken();
    this.router.navigate(['']);
  }
}
