import { Component, OnInit, Input } from '@angular/core';
import { Message, User } from 'app/models';
import { MessageService } from 'app/services/message.service';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @Input()
  user: User;
  content: String;
  status: String
  constructor(
    private messageService: MessageService
  ) { 
    this.content = '';
    this.status = '';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.messageService.createMessage(this.content, this.user).subscribe(
      (message) => {
        this.status = 'Ok'
      },
      (err) => {
        console.log(err);
        this.status = 'Error';
      }
    )

    this.content = '';
  }
}
