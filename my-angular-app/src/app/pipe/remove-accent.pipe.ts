// remove-accent.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeAccent'
})
export class RemoveAccentPipe implements PipeTransform {

  transform(value: string): string {
    // Normalize and remove all diacritics
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

}
