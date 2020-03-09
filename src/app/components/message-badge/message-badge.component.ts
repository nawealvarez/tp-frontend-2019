import { Component, OnInit, Input } from '@angular/core';
import { User } from 'app/models';

@Component({
  selector: 'app-message-badge',
  templateUrl: './message-badge.component.html',
  styleUrls: ['./message-badge.component.css']
})
export class MessageBadgeComponent implements OnInit {
  @Input()
  user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
