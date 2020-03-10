import { Component, OnInit, Input } from '@angular/core';
import { User, Message } from 'app/models';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'app/services/message.service';
import { UserService } from 'app/services/user.service';
import { UserMessages } from 'app/models/usermessages';
import { AuthService} from 'app/services/auth.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  private _user: User;

  @Input()
  userMessages: UserMessages;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService,
    private authService: AuthService
  ) { }

 ngOnInit() {
    this._user = this.authService.getCurrentUser();
  }

  public get user() : User {
    return this._user
  }

  ngOnChanges() {
    
  }

  messages(): Message[] {
    return this.userMessages.messages;
  }
}
