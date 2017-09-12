import { Component, OnInit, Input } from '@angular/core';
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import { TdLoadingService } from '@covalent/core';
import { Receivable } from '../../../core/models/receivable.model';
import { ShopingCartService } from '../services/shoping-cart.service/shoping-cart.service';
import { OperationService } from '../services/operation.service';
import { DataSource } from '@angular/cdk';
import { MdSort } from '@angular/material';

@Component({
  selector:    'app-operation-datagrid',
  templateUrl: './operation-datagrid.component.html',
  styleUrls:  ['./operation-datagrid.component.css']
})
export class OperationDatagridComponent implements OnInit {

  data:                     Receivable[] = [];
  columns:                  ITdDataTableColumn[] ;
  filteredData:             any[];
  filteredTotal:            number ;
  fromRow                   = 1;
  currentPage               = 1;
  pageSize                  = 15;
  sortBy:                   string;
  sortOrder:                TdDataTableSortingOrder;
  totalNumOfReceviables:    number;

  constructor( private _dataTableService:  TdDataTableService,
               private shopingCartService: ShopingCartService,
               private operationService:   OperationService,
               private _loadingService:    TdLoadingService) {
     this.operationService.receivableChange.subscribe(() =>  { this.ngOnInit(); } );
     this.operationService.getTotalNumOfReceviables().subscribe((data) =>  { this.totalNumOfReceviables = data} );
  }

  fillData() {
    // define the datagrid columns
    // name: the name of property in receivable model
    // label: column name to display in datagrid
      this.columns =  [
        { name: 'buyer.name',        label: 'Cliente/Nota/Recebivel' },
        { name: 'due_date',          label: 'Vencimento', format: v => new Date(v).toLocaleDateString() },
        { name: 'original_amount',   label: 'Valor'},
        { name: 'rate',              label: 'Taxa', format: v => v === 0 ? '' : v + '%', sortable: false},
        { name: 'receivable_status', label: ''},
      ];
      this.filteredData = this.data;
      this.filteredTotal = this.data.length;
      this.sortBy = 'rate';
      this.sortOrder = TdDataTableSortingOrder.Ascending;
      this.filter();
  }


  ngOnInit(): void {
    this._loadingService.register();
    this.operationService.getReceviables(1, this.pageSize)
      .finally(() => { this.fillData();  this._loadingService.resolve(); })
      .subscribe(data => {  this.data = data; });

    this.shopingCartService.removeFromCart.subscribe((itemToRemove) => {
        this.data.find(res => res.uuid === itemToRemove.uuid).receivable_status = 'APPROVED';
        this.filter();
      });
  }

  addItemToShoppingCart(receivable: Receivable) {
     const canAdd = this.shopingCartService.addItem(receivable);
     if (canAdd === true) {
       receivable.receivable_status = 'ADDED';
     }
  }

  removeItemFromShoppingCart(receivable: Receivable) {
     this.shopingCartService.removeItem(receivable);
     receivable.receivable_status = 'APPROVED';
  }



  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    console.log(sortEvent);
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    console.log('pagination', pagingEvent);
    this.operationService.getReceviables(pagingEvent.page, pagingEvent.pageSize).subscribe(
      data => {
        this.data = data;
      },
      err => { }
    );
    this.fromRow      = pagingEvent.fromRow;
    this.currentPage  = pagingEvent.page;
    this.pageSize     = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
      const newData: any[] = this.data;
      const excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
                (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
      this.setFilterDataToTable(newData);
    }

    setFilterDataToTable(newData: any): void {
      newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
      // newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
      this.filteredData = newData;
      this.filteredData.forEach( receivable => this.updateReceivableTOAddedStatus(receivable));

    }

updateReceivableTOAddedStatus(receivable: Receivable) {
       if (this.getAllUuidsReceivableInShoppingCart().indexOf(receivable.uuid) > -1 ) {
         receivable.receivable_status = 'ADDED'
       }

}

getAllUuidsReceivableInShoppingCart () :string[] {
  return this.shopingCartService.getItems().map( receivable => { return receivable.uuid } );
}
  // resetFilter() {
  //   let newData = this.data;
  //   this.setFilterDataToTable(newData);
  // }

  // filterAvilableInvoicces() {
  //   let newData = this.data.filter((resivable) => resivable.receivable_status == '0');
  //   this.setFilterDataToTable(newData);
  // }
  //
  // filterNeedMoreInfoInvoicces() {
  //   let newData = this.data.filter((resivable) => resivable.receivable_status == '3');
  //   this.setFilterDataToTable(newData);
  //
  // }
  //
  // filterByreceivable_status(event: Array<string>) {
  //   let newData = this.data.filter(( resivable ) => event.indexOf(Receivablereceivable_statusEnum[resivable.receivable_status]) > -1);
  //   this.setFilterDataToTable(newData);
  // }

  //
  // searchInputTerm(event) {
  //   let newData = this.data.filter((resivable) => resivable.client.startsWith(event));
  //   this.setFilterDataToTable(newData);
  // }



  }
