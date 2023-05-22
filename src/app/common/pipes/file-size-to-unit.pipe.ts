import { Pipe, PipeTransform } from '@angular/core';
import { formatBytes } from '@common/functions/utilFunctions';

@Pipe({ name: 'fileSizeToUnit' })
export class FileSizeToUnitPipe implements PipeTransform {
  transform(fileBytes: number): string {
    const sizeInUnit: string = formatBytes(fileBytes, 0);

    return sizeInUnit;
  }
}