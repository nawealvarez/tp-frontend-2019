import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input()
  user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
