import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'app/services/token.service';
import { User } from 'app/models';
import { AuthService } from 'app/services/auth.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private _user: User;
  constructor(private tokenService: TokenService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this._user = this.authService.getCurrentUser();
  }

  public get user() : User {
    return this._user
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.tokenService.deleteToken();
    this.router.navigate(['']);
  }
}
