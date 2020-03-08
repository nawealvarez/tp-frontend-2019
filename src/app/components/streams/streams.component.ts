import { Component, OnInit, Optional } from '@angular/core';
import { TokenService } from 'app/services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from 'app/models';
import { UserService } from 'app/services/user.service';
import { WebsocketService } from 'app/services/websocket.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  token: any;

  user$: User = null;
  constructor(
    private tokenService: TokenService, 
    private route: ActivatedRoute,
    private userService: UserService,
    private websocketService: WebsocketService
  ) { }

  ngOnInit() {
    this.token = this.tokenService.getToken();
    this.route.paramMap.subscribe(
      (params) => {
        const user_id = params.get('id');
        console.log(user_id)
        if(!user_id){
          return
        }
        this.userService.getUser(user_id).subscribe(
          (user) => {
            this.user$ = user;
          }
        );
      }
    );
    this.websocketService.listen('test event').subscribe((data) =>{
      console.log(data);
    });
  }

  
  public get user() : User {
    return this.user$;
  }
  
}
