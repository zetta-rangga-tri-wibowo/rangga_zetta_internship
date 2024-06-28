// age.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countAge'
})
export class CountAgePipe implements PipeTransform {

  transform(value: Date): number {
    let today = new Date();
    let birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    // Return the age
    return age;
  }

}
