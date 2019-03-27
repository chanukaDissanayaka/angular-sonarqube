import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'copyright'
})
export class CopyrightPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' ' + new Date().getFullYear();
  }

}
