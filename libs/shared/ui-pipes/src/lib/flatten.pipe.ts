import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten',
  pure: false,
})
export class FlattenPipe implements PipeTransform {
  transform(value: unknown[]): unknown[] {
    return this.flattenArray(value);
  }

  private flattenArray(arr: unknown[]): unknown[] {
    const result: unknown[] = [];

    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    });

    return result;
  }
}
