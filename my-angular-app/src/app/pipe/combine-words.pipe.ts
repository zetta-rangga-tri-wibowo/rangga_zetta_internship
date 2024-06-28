// combine-words.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'combineWords'
})
export class CombineWordsPipe implements PipeTransform {

  transform(value: string): string {
    // Remove all white spaces and convert to lowercase
    return value.replace(/\s+/g, '').toLowerCase();
  }

}
