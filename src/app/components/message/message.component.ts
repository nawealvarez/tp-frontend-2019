import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'app/models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  message: Message;

  constructor() { }

  ngOnInit() {
    console.log(this.message);
  }

}
