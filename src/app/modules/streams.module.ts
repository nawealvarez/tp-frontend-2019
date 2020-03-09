import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from 'app/services/token.service';
import { ToolbarComponent } from 'app/components/toolbar/toolbar.component';
import { SideComponent } from '../components/side/side.component';
import { PostService } from 'app/services/post.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from 'app/components/users/users.component';
import { MessageComponent } from 'app/components/message/message.component';
import { MessageListComponent } from 'app/components/message-list/message-list.component';
import { RouterModule } from '@angular/router';
import { MessageInputComponent } from 'app/components/message-input/message-input.component';
import { MessageBadgeComponent } from 'app/components/message-badge/message-badge.component';

@NgModule({
  declarations: [
    StreamsComponent, ToolbarComponent, SideComponent, UsersComponent,
    MessageListComponent, MessageComponent, MessageInputComponent, MessageBadgeComponent
  ],
  exports: [StreamsComponent, ToolbarComponent],
  imports: [CommonModule,FormsModule, HttpClientModule, RouterModule],
  providers: [TokenService, PostService]
})
export class StreamsModule {}
