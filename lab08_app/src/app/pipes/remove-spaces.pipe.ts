import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: false,
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    // Replace any occurrence of dash '-' with a space
    return value.replace(/-/g, ' ');
  }
}
