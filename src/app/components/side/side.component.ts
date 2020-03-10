import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/models';
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
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: User[]) => (this._users = users));

    this.userService.getMe().subscribe((current: User) => (this.currentUser = current));
    if (!this.currentUser){
      console.log(`Error en side ${this.currentUser}`);
    }else{console.log(`el current user es ${this.currentUser}`);}
  }

  public get users(): User[] {
    return this._users;
  }

  public get current(): User {
    return this.currentUser;
  }
}
