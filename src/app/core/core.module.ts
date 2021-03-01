import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneratorFactory } from './services/generator.factory';
import { CONSTANTS_SERVICE, GeneratorService, LocalStorageService } from './services';
import { generatedString } from './services/generated-string.injection-token';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GeneratorService,
    LocalStorageService,
    {
      provide: generatedString,
      useFactory: GeneratorFactory(10),
      deps: [GeneratorService]
    },
    {
      provide: CONSTANTS_SERVICE,
      useValue: CONSTANTS_SERVICE
    }
  ]
})
export class CoreModule {
}
