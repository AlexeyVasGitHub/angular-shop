import { GeneratorService } from './generator.service';

export function GeneratorFactory(n: number, generatorService: GeneratorService): string {
  return generatorService.generate(n);
}
