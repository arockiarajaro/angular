import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addString'
})
export class AddStringPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value+" Testing";
  }

}
