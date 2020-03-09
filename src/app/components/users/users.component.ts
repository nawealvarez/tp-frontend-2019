import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/models';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  user: User;
  @Input()
  selected: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
