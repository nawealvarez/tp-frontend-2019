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
    this.userService.getAllUsers().subscribe((users: User[]) => (this._users = users));

    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser){
      console.log(`Error en side ${this.currentUser}`);
    }else{console.log(`el current user es ${this.currentUser}`);}
  }

  public get users(): User[] {
   /* for (var i =0; i<this._users.length; i++){
      if (this._users[i]["username"] == this.currentUser.username){
        this._users.splice(i,1);
        return this._users;
      }
    }*/
   return this._users;
  }

  public get current(): User {
    return this.currentUser;
  }
}
