import { Injectable } from '@angular/core';
import { IConfigModel } from '../models/config-model.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configOptions: IConfigModel | null = null;

  constructor() { }

  setValues(config: IConfigModel): void {
    this.configOptions = {...this.configOptions, ...config};
  }

  getValues(): IConfigModel | null {
    return this.configOptions;
  }
}
