export enum CategoryEnum {
  Category1,
  Category2,
  Category3
}

export function GetCategoryName(value: CategoryEnum): string {
  switch (value) {
    case CategoryEnum.Category1:
      return 'Caterory 1';
    case CategoryEnum.Category2:
      return 'Category 2';
    case CategoryEnum.Category3:
      return 'Category 3';
    default:
      return '';
  }
}
