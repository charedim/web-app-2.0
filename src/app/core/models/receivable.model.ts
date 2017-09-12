const  FLOAT = 1;
const ADVALORM = 17 / 100;
const RECEIVABLE_FEE = 3;

export class Receivable {

  // client:         string;
  // invoice:        string;
  // installment_number: string;
  // due_date:        Date;
  // original_amount:  number;
  // rate:           number;
  // final_amount:       number;
  // receivable_status:         Receivablereceivable_statusEnum;
  uuid:                        string;
  updated_time:                string;
  buyer;
  receivable_created:          string;
  due_date:                    string;
  installment_number?:         number;
  total_invoice_installments?: number;
  comment?:                    string;
  original_amount:             number;
  final_amount:                number;
  invoice_uuid?:               string;
  interest_total:              number;
  fine_total:                  number;
  discount_total:              number;
  paid_total:                  number;
  outstanding_value:           number; // total sum that sub from the price of the receivable
  liquidation_date?:           string;
  invoice_type:                string;
  default_factor?:             string;
  status:                      string;
  rank?:                       string;
  rate?:                       string;
  decision_reason?:            string;
  receivable_status?:          string; // can be  ANALYSIS, REJECTED, APPROVED
  factor_receivable_status?:   string;
  factor_cnpj:                 string;
  fee?:                        number;
  total_deduction_amount:      number; // (interest + ad_valorem + daily_iof + tac )
  profit_from_rate:            number;
  quotation_amount:            number;

  constructor() {

  }

  compareTo(resivable: Receivable): number {
   return this.rate > resivable.rate ? 1 : this.rate < resivable.rate ? -1 :
          this.final_amount < resivable.final_amount ? 1 : this.final_amount > resivable.final_amount ? -1 :
          this.due_date > resivable.due_date ? 1 : this.due_date < resivable.due_date ? -1 :
          this.original_amount > resivable.original_amount ? 1 : this.original_amount < resivable.original_amount ? -1 : 0;
  }

}
