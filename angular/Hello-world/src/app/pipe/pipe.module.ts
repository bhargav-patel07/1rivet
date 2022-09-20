import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPipeComponent } from './user-pipe/user-pipe.component';



@NgModule({
  declarations: [
    UserPipeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
