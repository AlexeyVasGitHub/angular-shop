import { Component, Inject, OnInit } from '@angular/core';
import { ConfigOptionsService } from '../core/services/config-options.service';
import { CategoryEnum } from '../products/models/category.enum';
import { CONSTANTS_SERVICE } from '../core/services/constants.service';
import { generatedString } from '../core/services/generated-string.injection-token';
import { LocalStorageService } from '../core/services/local-storage.service';

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

  constructor(configOptionsService: ConfigOptionsService,
              @Inject(CONSTANTS_SERVICE) constants: any,
              @Inject(generatedString) generated: string,
              localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

}
