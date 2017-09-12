// import { Component, OnInit,Output,EventEmitter} from '@angular/core';
//
// @Component({
//   selector: 'app-operation-filter',
//   templateUrl: './operation-filter.component.html',
//   styleUrls: ['./operation-filter.component.scss']
// })
//
// export class OperationFilterComponent implements OnInit {
//   showCard:boolean = false;
//   @Output() changeValue: EventEmitter<string[]> = new EventEmitter<string[]>();
//
// constructor() {}
// ngOnInit() {}
// allreceivable_status:string[] = [
// "ADD","ADDED","LOADING","REJECT"]
// chooseFilters:Array<string>=['ADD','ADDED','LOADING','REJECT']
//
//
// changeVal(event){
//   if(event.checked==true){
//     this.chooseFilters.push(event.source.name);
//    }
//  else {
//     var index = this.chooseFilters.indexOf(event.source.name)
//      if (index > -1) {
//         this.chooseFilters.splice(index, 1);
//       }
// }
//
// this.changeValue.emit(this.chooseFilters);
// }
//
// }
