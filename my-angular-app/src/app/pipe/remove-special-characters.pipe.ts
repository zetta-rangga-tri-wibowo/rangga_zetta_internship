// remove-special-characters.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpecialCharacters'
})
export class RemoveSpecialCharactersPipe implements PipeTransform {

  transform(value: string): string {
    // Remove special characters from the string
    return value.replace(/[^a-zA-Z0-9]/g, '');
  }

}
