import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  /**
   * Slugifies a string given an input.
   *
   * @param {string} input any string you want
   * @returns {string} returns slugified string
   * @memberof SlugifyPipe
   */
   transform(input: string): string {
    if (typeof input === 'string' && input) {
      return input.toLowerCase().trim().replace(/[^\w\-]+/g, ' ').replace(/\s+/g, '-');
    } else {
      return input;
    }
  }

}
