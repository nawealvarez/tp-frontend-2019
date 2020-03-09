import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { WebsocketService } from './websocket.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthGuard, WebsocketService]
})
export class ServicesModule {}
