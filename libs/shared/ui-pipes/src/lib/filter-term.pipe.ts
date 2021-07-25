import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(value: string[], arg: string = ''): string[] {
    const result = value?.filter((item) =>
      item.toLowerCase().includes(arg.toLowerCase())
    );
    if (result.length) {
      return result;
    } else {
      return ['Not Found'];
    }
  }
}
