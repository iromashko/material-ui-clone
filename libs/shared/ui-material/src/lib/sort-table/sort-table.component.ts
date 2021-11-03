import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'material-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortTableComponent {
  @Input() tableData: any[] = [];

  sortDirection = true;

  sort(headerData: { key: any; value: any }): void {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;

      case typeof value === 'number':
        this.sortNumber(key);
        break;

      case this.isDate(value):
        this.sortDate(key);
        break;

      case typeof value === 'string':
        this.sortString(key);
        break;

      default:
        break;
    }
  }

  private sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return (
          new Date(value1[key]).getTime() - new Date(value2[key]).getTime()
        );
      } else {
        return (
          new Date(value2[key]).getTime() - new Date(value1[key]).getTime()
        );
      }
    });
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);

    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }
  private sortNumber(key: string): void {
    this.tableData.sort((leftValue: any, rightValue: any) => {
      if (this.sortDirection) {
        return Number(leftValue[key]) - Number(rightValue[key]);
      } else {
        return Number(rightValue[key]) - Number(leftValue[key]);
      }
    });
  }
  private sortString(key: string): void {
    this.tableData.sort((leftValue: any, rightValue: any) => {
      const leftValueUpperCased = leftValue[key].toUpperCase();
      const rightValueUpperCased = rightValue[key].toUpperCase();

      if (this.sortDirection) {
        if (leftValueUpperCased > rightValueUpperCased) {
          return -1;
        }
        if (rightValueUpperCased > leftValueUpperCased) {
          return 1;
        }

        return 0;
      } else {
        if (rightValueUpperCased > leftValueUpperCased) {
          return -1;
        }
        if (leftValueUpperCased > rightValueUpperCased) {
          return 1;
        }

        return 0;
      }
    });
  }
}
