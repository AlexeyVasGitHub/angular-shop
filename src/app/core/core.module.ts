import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorFactory } from './services/generator.factory';
import { GeneratorService } from './services/generator.service';
import { CONSTANTS_SERVICE } from './services/constants.service';
import { LocalStorageService } from './services/local-storage.service';
import { generatedString } from './services/generated-string.injection-token';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GeneratorService,
    {
      provide: generatedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService]
    },
    {
      provide: CONSTANTS_SERVICE,
      useValue: CONSTANTS_SERVICE
    },
    {
      provide: LocalStorageService,
      useValue: LocalStorageService
    }
  ]
})
export class CoreModule { }
