import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateChar'
})
export class TruncateCharPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
