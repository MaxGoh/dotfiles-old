import { Pipe, PipeTransform } from '@angular/core';

@Pipe({'name': 'truncate'})
export class TruncatePipe implements PipeTransform {
  transform(text: string, count: number): string {
    return text.slice(0, count);
  };
}
