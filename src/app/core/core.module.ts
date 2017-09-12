import { NgModule } from '@angular/core';

import { WordBreakPipe } from './pipes/word-break.pipe';
import { BrazilianNumberFormatPipe } from './pipes/brazilian-format-number.pipe';
import { FactorCustomersService } from './services/factor-customers.services';

@NgModule({
  declarations: [
    WordBreakPipe,
    BrazilianNumberFormatPipe
  ],
  exports: [
    WordBreakPipe,
    BrazilianNumberFormatPipe
  ],
  providers: [
    FactorCustomersService
  ]


})
export class CoreModule { }
