import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm',
})
export class FilterTermPipe implements PipeTransform {
  transform(value: string[], arg: string = ''): string[] {
    return value?.filter((item) =>
      item.toLowerCase().includes(arg.toLowerCase())
    );
  }
}
