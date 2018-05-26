import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, args: any): any {
    args.split(',').forEach(condition => {
      let re = new RegExp(condition, 'gi');  
      switch (condition) {
        case 'o':
          value = value.replace(re, '<span class="my-blue">' + condition + '</span>');
          break;
        case 'r':
          value = value.replace(re, '<span class="my-orange">' + condition + '</span>');
          break;
        default:
          break;
      }
    });
    
    return value;
  }

}
