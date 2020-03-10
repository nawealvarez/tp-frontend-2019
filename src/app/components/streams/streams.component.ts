import { Component, OnInit, Optional, OnDestroy } from '@angular/core';
import { TokenService } from 'app/services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, startWith } from 'rxjs/operators';
import { Observable, interval, Subscription } from 'rxjs';
import { User } from 'app/models';
import { UserService } from 'app/services/user.service';
import { UserMessages } from 'app/models/usermessages';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit, OnDestroy {
  token: any;
  polling: Subscription;
  _userMessages: UserMessages = null;
  constructor(
    private tokenService: TokenService, 
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.token = this.tokenService.getToken();
    this.route.paramMap.subscribe(
      (params) => { 
        const user_id = params.get('id');
        if (!user_id){
          console.log(`Error streams ${user_id}`);
        }
        if(this.polling) {
          this.polling.unsubscribe();
        }
        this.polling = interval(500).pipe(
          startWith(0),
          switchMap(() => this.userService.getUser(user_id))
        ).subscribe(
          (user) => {
            this._userMessages = user;
          }
        )
      }
    )
  } 

  ngOnDestroy() {
    this.polling.unsubscribe();
  }
  
  public get userMessages() : UserMessages {
    return this._userMessages;
  }
  
}
