import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/models';
import { AuthService } from 'app/services/auth.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  @Input()
  selectedUser: User;
  currentUser: User;
  private _users: User[];
  constructor(private authService: AuthService, private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.userService.getAllUsers().subscribe((users: User[]) => {
      if (users.length > 0){
        for (var i=0; i<users.length; i++){
          if (users[i]["username"] == this.currentUser.username){
            users.splice(i,1);
            this._users=users;
          }
        }
      }
    }
    )
  }

  public get users(): User[] {
   return this._users;
  }

  /*public get current(): User {
    return this.currentUser;
  }*/
}
