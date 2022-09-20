import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFeature'
})
export class PipeFeaturePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
