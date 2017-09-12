import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'wordbreak'})
export class WordBreakPipe implements PipeTransform {

  // Cut the string to the desired length and add "..." at the end
  // @params: value: string to cut;
  //          numCharacters: desirable long of charecters;
    transform(value: string, numCharacters: number): string {
      let res = value ? value : '';
      if (value !== null && value !== undefined && value.length > numCharacters) {
      res = value.substring( 0 , numCharacters ) + '...';
      }
      return res;
    }


  }
