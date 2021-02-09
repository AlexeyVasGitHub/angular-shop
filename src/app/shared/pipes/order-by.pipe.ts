import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any, props: string[], isAsc: boolean = true): any {
    if (!Array.isArray(value)){
      return value;
    }

    // Я уже понял, что не верно описал задание расширеное, так как многие из вас именно так
    // его восприняли, уже уточнил.
    // Надо сортировать по второму полю в рамках одинаковых значений по первому полю,
    // иначе такая сортировка не имеет смысла.
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
