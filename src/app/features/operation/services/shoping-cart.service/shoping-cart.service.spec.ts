import { TestBed, inject , async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { AppModule } from '../../../../app.module';
import { ShopingCartService } from './shoping-cart.service';
import { CalcDiscountService } from '../calc-discount.service';
import { ApiService } from '../../../../core/services/api.services';
import { FactorCustomersService } from '../../../../core/services/factor-customers.services';

describe('ShopingCartService', () => {
    let shoppingCartService;
    let calcDiscountService;
    let itemToAdd;
    let itemToRemove;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ShopingCartService , FactorCustomersService, ApiService, CalcDiscountService ],

    });
  });

  beforeEach( inject([ShopingCartService], s => {
    shoppingCartService = s;
  }));

  beforeEach( inject([CalcDiscountService], s => {
    calcDiscountService = s;
  }));

  it('should be created', () => {
    expect(shoppingCartService).toBeTruthy();
  });


  it('should add new item to shoping cart (async)', async (() => {


const newItem = {
    comment:"bla bla bla",
    decision_reason:"it was a good deal",
    default_factor:"13.514.676/0001-46",
    discount_total:0,
    due_date:"2014-07-12T04:36:58.121Z",
    e_invoice_number:"35170380285744020112550810000092411690406953",
    fee:3,
    final_amount:376.31,
    fine_total:0,
    installment_number:2,
    interest_total:0,
    invoice_type:"PRODUCT",
    invoice_uuid:"v657c0e34bm53c0180az83f32847784s",
    liquidation_date:"2015-04-08T11:13:11.573Z",
    original_amount:376.31,
    outstanding_value:376.31,
    paid_total:0,
    profit_from_rate:36,
    quotation_amount:301.01,
    rank:83,
    rate:0.023,
    receivable_created:"2013-03-26T18:46:24.010Z",
    receivable_status:"APPROVED",
    status:"VALID",
    total_deduction_amount:75.3,
    total_invoice_installments:3,
    updated_time:"2014-11-04T21:58:00.014Z",
    uuid:"v657c0e34bm53c0180az83f32847784s"
  }











    // const newItem = { client: 'aaa', invoice: 'bbb', installment_number: '1/4', profit_from_rate: 0,
    //                 due_date: new Date(2017, 2, 10), original_amount: 100, rate: 2, final_amount: 102, receivable_status: 1 };
    const numOfItemsInCartBeforeAdd = shoppingCartService.getLength();
      shoppingCartService.itemsChange.subscribe(catrItems => {
      expect(catrItems.length).toEqual(numOfItemsInCartBeforeAdd + 1);
      expect(catrItems).toContain(newItem);
    });

      shoppingCartService.addItem(newItem);
  }));

  it('should not add exist item to cart (async)', async (() => {


    const itemToAdd = {
        comment:"bla bla bla",
        decision_reason:"it was a good deal",
        default_factor:"13.514.676/0001-46",
        discount_total:0,
        due_date:"2014-07-12T04:36:58.121Z",
        e_invoice_number:"35170380285744020112550810000092411690406953",
        fee:3,
        final_amount:376.31,
        fine_total:0,
        installment_number:2,
        interest_total:0,
        invoice_type:"PRODUCT",
        invoice_uuid:"v657c0e34bm53c0180az83f32847784s",
        liquidation_date:"2015-04-08T11:13:11.573Z",
        original_amount:376.31,
        outstanding_value:376.31,
        paid_total:0,
        profit_from_rate:36,
        quotation_amount:301.01,
        rank:83,
        rate:0.023,
        receivable_created:"2013-03-26T18:46:24.010Z",
        receivable_status:"APPROVED",
        status:"VALID",
        total_deduction_amount:75.3,
        total_invoice_installments:3,
        updated_time:"2014-11-04T21:58:00.014Z",
        uuid:"v657c0e34bm53c0180az83f32847784s"
      }


      // itemToAdd = { client: 'aaa', invoice: 'bbb', installment_number: '1/4',
      //                 due_date: new Date(2017, 2, 10), original_amount: 100, rate: 2, final_amount: 102, receivable_status: 1 };
      const numOfItemsInCartBeforeAdd = shoppingCartService.getLength();
      shoppingCartService.addItem(itemToAdd);
      const canAdd = shoppingCartService.addItem(itemToAdd);
      expect(canAdd).toBeFalsy();
  }));

  it('should remove item to cart items if  exsist (async)', async (() => {

    const itemToRemove = {
        comment:"bla bla bla",
        decision_reason:"it was a good deal",
        default_factor:"13.514.676/0001-46",
        discount_total:0,
        due_date:"2014-07-12T04:36:58.121Z",
        e_invoice_number:"35170380285744020112550810000092411690406953",
        fee:3,
        final_amount:376.31,
        fine_total:0,
        installment_number:2,
        interest_total:0,
        invoice_type:"PRODUCT",
        invoice_uuid:"v657c0e34bm53c0180az83f32847784s",
        liquidation_date:"2015-04-08T11:13:11.573Z",
        original_amount:376.31,
        outstanding_value:376.31,
        paid_total:0,
        profit_from_rate:36,
        quotation_amount:301.01,
        rank:83,
        rate:0.023,
        receivable_created:"2013-03-26T18:46:24.010Z",
        receivable_status:"APPROVED",
        status:"VALID",
        total_deduction_amount:75.3,
        total_invoice_installments:3,
        updated_time:"2014-11-04T21:58:00.014Z",
        uuid:"v657c0e34bm53c0180az83f32847784s"
      }


      shoppingCartService.addItem(itemToRemove);
      const numOfItemsInCartBeforeRemove = shoppingCartService.getLength();
      shoppingCartService.itemsChange.subscribe(catrItems => {

      expect(catrItems.length).toEqual(numOfItemsInCartBeforeRemove - 1);
      expect(catrItems).not.toContain(itemToRemove);
    });
      shoppingCartService.removeItem(itemToRemove);
  }));


  it('should not add item to cart if totalSum is over credit limit(async)', async (() => {

    const itemToAdd = {
        comment:"bla bla bla",
        decision_reason:"it was a good deal",
        default_factor:"13.514.676/0001-46",
        discount_total:0,
        due_date:"2014-07-12T04:36:58.121Z",
        e_invoice_number:"35170380285744020112550810000092411690406953",
        fee:3,
        final_amount:376.31,
        fine_total:0,
        installment_number:2,
        interest_total:0,
        invoice_type:"PRODUCT",
        invoice_uuid:"v657c0e34bm53c0180az83f32847784s",
        liquidation_date:"2015-04-08T11:13:11.573Z",
        original_amount:376.31,
        outstanding_value:376.31,
        paid_total:0,
        profit_from_rate:36,
        quotation_amount:301.01,
        rank:83,
        rate:0.023,
        receivable_created:"2013-03-26T18:46:24.010Z",
        receivable_status:"APPROVED",
        status:"VALID",
        total_deduction_amount:75.3,
        total_invoice_installments:3,
        updated_time:"2014-11-04T21:58:00.014Z",
        uuid:"v657c0e34bm53c0180az83f32847784s"
      }



      shoppingCartService.supplierCreditLimit = calcDiscountService.calcOperation([itemToAdd]) - 5;

      const canAddItem = shoppingCartService.addItem(itemToAdd);
      console.log('cl', shoppingCartService.supplierCreditLimit);
      console.log('sum', calcDiscountService.calcOperation([itemToAdd]) - 5)
    //  expect(shoppingCartService.supplierCreditLimit).toEqual( calcDiscountService.calcOperation([itemToAdd]));
        expect (canAddItem).toBeFalsy();
      // expect (shoppingCartService.getItems()).not.toContain(itemToAdd);

  }));

  it('should add to totalSum when add receivable to cart', async (() => {
      shoppingCartService.addItem({ client: 'aaa', invoice: 'bbb', installment_number: '1/4',  profit_from_rate: 0,
                                due_date: new Date(2017, 2, 10), original_amount: 100, rate: 2, final_amount: 400, receivable_status: 1 });
      shoppingCartService.addItem({ client: 'bbb', invoice: 'bbb', installment_number: '1/4',  profit_from_rate: 0,
                                 due_date: new Date(2017, 2, 10), original_amount: 100, rate: 2, final_amount: 50, receivable_status: 1 });
      const totalOperationSum =  calcDiscountService.calcOperation(shoppingCartService.getItems());
        expect(shoppingCartService.getTotalSum()).toEqual(totalOperationSum);
  }));

  it('should sub from totalSum when remove receivable from cart', async (() => {
      // itemToAdd = { client: 'bbb', invoice: 'bbb', installment_number: '1/4',
      //                  due_date: new Date(2017, 2, 10), original_amount: 100, rate: 2, final_amount: 50, receivable_status: 1 };


      const itemToAdd = {
          comment:"bla bla bla",
          decision_reason:"it was a good deal",
          default_factor:"13.514.676/0001-46",
          discount_total:0,
          due_date:"2014-07-12T04:36:58.121Z",
          e_invoice_number:"35170380285744020112550810000092411690406953",
          fee:3,
          final_amount:376.31,
          fine_total:0,
          installment_number:2,
          interest_total:0,
          invoice_type:"PRODUCT",
          invoice_uuid:"v657c0e34bm53c0180az83f32847784s",
          liquidation_date:"2015-04-08T11:13:11.573Z",
          original_amount:376.31,
          outstanding_value:376.31,
          paid_total:0,
          profit_from_rate:36,
          quotation_amount:301.01,
          rank:83,
          rate:0.023,
          receivable_created:"2013-03-26T18:46:24.010Z",
          receivable_status:"APPROVED",
          status:"VALID",
          total_deduction_amount:75.3,
          total_invoice_installments:3,
          updated_time:"2014-11-04T21:58:00.014Z",
          uuid:"v657c0e34bm53c0180az83f32847784s"
        }


      shoppingCartService.addItem(itemToAdd);
      shoppingCartService.removeItem(itemToAdd);
      expect(shoppingCartService.getTotalSum()).toEqual(0);

  }));


    it('should update credit left', async (() => {
      const cerditLimit = shoppingCartService.supplierCreditLimit;
      expect(shoppingCartService.supplierCreditLeft).toEqual(cerditLimit);
      // itemToAdd = { client: 'bbb', invoice: 'bbb', installment_number: '1/4',
      //                   due_date: new Date(2017, 2, 10), original_amount: 100, rate: 2, final_amount: 50,  receivable_status: 1 };


      const itemToAdd = {
          comment:"bla bla bla",
          decision_reason:"it was a good deal",
          default_factor:"13.514.676/0001-46",
          discount_total:0,
          due_date:"2014-07-12T04:36:58.121Z",
          e_invoice_number:"35170380285744020112550810000092411690406953",
          fee:3,
          final_amount:376.31,
          fine_total:0,
          installment_number:2,
          interest_total:0,
          invoice_type:"PRODUCT",
          invoice_uuid:"v657c0e34bm53c0180az83f32847784s",
          liquidation_date:"2015-04-08T11:13:11.573Z",
          original_amount:376.31,
          outstanding_value:376.31,
          paid_total:0,
          profit_from_rate:36,
          quotation_amount:301.01,
          rank:83,
          rate:0.023,
          receivable_created:"2013-03-26T18:46:24.010Z",
          receivable_status:"APPROVED",
          status:"VALID",
          total_deduction_amount:75.3,
          total_invoice_installments:3,
          updated_time:"2014-11-04T21:58:00.014Z",
          uuid:"v657c0e34bm53c0180az83f32847784s"
        }


      shoppingCartService.addItem(itemToAdd);
      const totalOperationSum =  calcDiscountService.calcOperation(shoppingCartService.getItems());
      console.log('aa', cerditLimit)
      expect(shoppingCartService.supplierCreditLeft).toEqual(cerditLimit - totalOperationSum);
    }));

});
