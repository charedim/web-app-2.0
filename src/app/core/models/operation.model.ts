import { Receivable } from './receivable.model';
import { BankAccount } from './bank-account';

export class Operation {
  uuid?:                   string;
  bank_account_uuid:       string;
  gross_amount:            number;
  net_amount:              number;
  receivables:             string[];
  constructor( ) {

  }
}
