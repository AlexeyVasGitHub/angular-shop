import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  private chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor() { }

  generate(n: number): string {
    let result = '';
    for (let i = n; i > 0; --i) {
      result += this.chars[Math.floor(Math.random() * this.chars.length)];
    }
    return result;
  }
}
