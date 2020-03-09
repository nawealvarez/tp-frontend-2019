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
  private _users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((users: User[]) => this._users=users);
  }

  
  public get users() : User[] {
    return this._users
  }
  

}
