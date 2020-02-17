import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from 'app/services/token.service';
import { ToolbarComponent } from 'app/components/toolbar/toolbar.component';
import { SideComponent } from '../components/side/side.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { PostsComponent } from '../components/posts/posts.component';
import { PostService } from 'app/services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from 'app/components/users/users.component';
import { MessageComponent } from 'app/components/message/message.component';
import { MessageListComponent } from 'app/components/message-list/message-list.component';

@NgModule({
  declarations: [
    StreamsComponent, ToolbarComponent, SideComponent, PostFormComponent, PostsComponent,
    UsersComponent, MessageListComponent, MessageComponent
  ],
  exports: [StreamsComponent, ToolbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [TokenService, PostService]
})
export class StreamsModule {}
