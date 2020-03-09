import { Component, OnInit, Input } from '@angular/core';
import { User, Message } from 'app/models';
import { MessageService } from 'app/services/message.service';
import { UserService } from 'app/services/user.service';
import { UserMessages } from 'app/models/usermessages';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  userMessages: UserMessages;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {}

  ngOnChanges() {
    
  }

  messages(): Message[] {
    return this.userMessages.messages;
  }
}
