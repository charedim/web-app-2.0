import { BankAccount } from './bank-account';

export class FactorCustomers {

  uuid:                   string;
  custom_fields:          string;
  cnpj:                   string;
  name:                   string;
  display_name:           string;
  phones:                 string[];
  address:                string;
  email:                  string;
  website:                string;
  state_registration:     string;
  municipal_registration: string;
  tax_plan:               string;
  industry_code:          string;
  accountant:             string;
  avatar:                 string;
  factor_activation_date: string;
  total_credit_limit:     number;
  credit_limit_remaining: number;
  bank_accounts:          BankAccount[];



}
