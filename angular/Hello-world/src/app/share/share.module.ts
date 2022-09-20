import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeFeaturePipe } from './pipe-features/pipe-feature.pipe';
import { PipeModule } from '../pipe/pipe.module';
import { pipe } from 'rxjs';





@NgModule({
  declarations: [
    PipeFeaturePipe
  ],
  imports: [
    CommonModule,
  ]

})
export class ShareModule { }
