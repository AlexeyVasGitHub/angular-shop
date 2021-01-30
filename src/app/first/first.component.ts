import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from '../products/models/category-enum.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  name = 'Test';
  description = 'Test Description';
  price = 0;
  category: CategoryEnum = CategoryEnum.Category1;
  isAvailable = true;

  constructor() { }

  ngOnInit(): void {
  }

}
