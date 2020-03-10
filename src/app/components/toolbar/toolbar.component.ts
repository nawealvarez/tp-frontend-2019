import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from 'app/services/token.service';
import { User } from 'app/models';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  private _user: User;
  constructor(private tokenService: TokenService, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getMe().subscribe((user: User) => (this._user = user));
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
