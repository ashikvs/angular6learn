import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Custompipe'})
export class Custompipe implements PipeTransform {
  transform(value: string): any {
   //let newStr: string ;
    /* for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    } */
    return value+"  (from custom pipe)";
  }
}
