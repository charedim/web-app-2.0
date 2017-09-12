// import { Component, OnInit ,Output} from '@angular/core';
// import { EventEmitter } from '@angular/core';
//
// @Component({
//   selector: 'app-nfe',
//   templateUrl: './nfe.component.html',
//   styleUrls: ['./nfe.component.css']
// })
// export class NfeComponent implements OnInit {
//
//   data:any[]=[
//     {name:"shulamit",lastName:"charedim", date:"12/05/17"},
//     {name:"lea",lastName:"aaa", date:"12/05/17"},
//       {name:"shira",lastName:"bbb", date:"12/05/17"},
//         {name:"keren",lastName:"ccc", date:"12/07/17"},
//           {name:"dina",lastName:"ddd", date:"12/02/17"},
//             {name:"ruchi",lastName:"eee", date:"01/05/17"},
//               {name:"faigi",lastName:"fff", date:"12/05/14"},
//
//   ];
//
//   columns:any[]=[
//   { name:"name", label:"NAME" },
//   { name:"lastName", label:"LAST_NAME" },
//   { name:"date", label:"DATE" },
//   ]
//
//   @Output() onSelectedFile: EventEmitter<any> = new EventEmitter<any>();
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// selectedFile(file:File) {
// this.onSelectedFile.emit(file);
// }
//
//   }
