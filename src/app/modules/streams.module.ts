import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from 'app/services/token.service';

@NgModule({
  declarations: [StreamsComponent],
  exports: [StreamsComponent],
  imports: [CommonModule],
  providers: [TokenService]
})
export class StreamsModule {}
