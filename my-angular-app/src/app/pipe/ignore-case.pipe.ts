// ignore-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ignoreCase'
})
export class IgnoreCasePipe implements PipeTransform {

  transform(value: string): string {
    // Convert to lowercase
    return value.toLowerCase();
  }

}
