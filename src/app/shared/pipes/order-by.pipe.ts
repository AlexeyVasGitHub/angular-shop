import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, props: string[], isAsc: boolean = true): any {
    if (!Array.isArray(value)){
      return value;
    }

    const sortFunc = (a: any, b: any) => {
      let result = 0;
      props.forEach(prop => {
        if (!result) {
          result = isAsc ? a[prop] - b[prop] : b[prop] - a[prop];
        }
      });
      return result;
    };

    return value.sort(sortFunc);
  }

}
