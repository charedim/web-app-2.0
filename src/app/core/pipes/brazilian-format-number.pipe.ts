import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'brazilianNumberFormat'})
export class BrazilianNumberFormatPipe implements PipeTransform {

  // Receives a number in Brazilian format and replaces the points and commas;
  // R$3,323.12 => R$ 3.323,12
  transform( value: string ): string {
    if (value && value.length > 2) {
      let res = value.replace(',', '*');
          res = res.replace('.', ',');
          res = res.replace('*', '.');

          if (res.length > 2) {
            res = res.replace('R$', 'R$ ');
          }
  return res;
    }
return '';

  }
}
