import { Component, OnInit, Input } from '@angular/core';
import { User, Message } from 'app/models';
import { MessageService } from 'app/services/message.service';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input()
  user: User;
  messages: Message[];

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.messageService.getAllByUser(this.user)
      .subscribe((data) => this.messages=data.messages)

      
  }
  
  //ngOnInit() {
  //  this.msgInit();
  //  this.id = setInterval(() => {
  //    this.msgInit(); 
  //  }, 5000);
  //}
  
  //ngOnDestroy() {
  //  if (this.id) {
  //    clearInterval(this.id);
  //  }
 // }

}
