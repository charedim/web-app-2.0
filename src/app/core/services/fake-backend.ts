// import { Http, BaseRequestOptions, Response, ResponseOptions,
// RequestMethod } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
//
// import { Receivable } from '../models/receivable.model';
// import { Receivablereceivable_statusEnum
// } from '../models/receivable-receivable_status.model'
// import { BankAccount } from '../models/bank-account'
// //
// const allResivable=[
//   new Receivable( "LATICINIOS UNIAO TOTAL LTDA","42514 1/2", new Date(20
// 17,2,10),123,11,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "BIASO & BACHA INDUSTRIA E COMERCIO DE EQUIPAMENTOS EM
//  ACO IN","32322 1/2", new Date("February 4, 2016 10:13:00"),1
// 23.00,8,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "BIASO & BACHA INDUSTRIA E COMERCIO DE EQUIPAMENTOS EM ACO IN",
// "52415 2/2", new Date("February 4, 2016 10:13:00"),123.00,2,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "BIASO & BACHA INDUSTRIA E COMERCIO DE EQUIPAMENTOS EM ACO IN",
// "89565 2/7", new Date("February 4, 2016 10:13:00"),845.00,0.5,Receivable
// receivable_statusEnum.ADD),
//   new Receivable( "ELIAS G. DE OLIVEIRA ACESSÓRIOS E PROD. PARA PISCINAS- EPP ",
// "02132 4/7", new Date("February 4, 2016 10:13:00"),450.00,8,Receiv
// ablereceivable_statusEnum.ADD),
//   new Receivable( "ELIAS G. DE OLIVEIRA ACESSÓRIOS E PROD. PARA PISCINAS- EPP ",
// "98547 1/2", new Date("February 4, 2016 10:13:00"),754.00,7,Rec
// eivablereceivable_statusEnum.ADD),
//   new Receivable( "ELIAS G. DE OLIVEIRA ACESSÓRIOS E PROD. PARA PISCINAS- EPP ",
// "98741 2/5", new Date("February 4, 2016 10:13:00"),420.00,14,Receivabler
// eceivable_statusEnum.ADD),
//   new Receivable( "ITAPETININGA COMERCIO DE PISCINAS LTDA - ME","85210 2/5",
//  new Date("February 4, 2016 10:13:00"),120.00,1,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "ITAPETININGA COMERCIO DE PISCINAS LTDA - ME","02023 1/1",
// new Date("February 4, 2016 10:13:00"),111.00,100,Receivablereceivable_
// statusEnum.LOADING),
//   new Receivable( "ITAPETININGA COMERCIO DE PISCINAS LTDA - ME","98555 1/7",
//  new Date("February 4, 2016 10:13:00"),874.00,1,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "LONG COMERCIO DE COSMETICOS LTDA ME","66323 2/4",
//  new Date("February 4, 2016 10:13:00"),845.00,0.71,Receivablereceivable_s
// tatusEnum.ADD),
//   new Receivable( "LONG COMERCIO DE COSMETICOS LTDA ME","99974 2/2",
//  new Date("February 4, 2016 10:13:00"),754.00,12,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "LONG COMERCIO DE COSMETICOS LTDA ME","11120 1/3",
// new Date("February 4, 2016 10:13:00"),450.00,4,Receivablereceivable_statusEnum.ADD),
//   new Receivable( "BYBECKER IND., COM. IMP. E EXP DE MAQUINAS E EQUIP LTDA ",
// "11120 2/3", new Date("February 4, 2016 10:13:00"),150.00,5,Receivablere
// ceivable_statusEnum.ADD),
//   new Receivable( "BYBECKER IND., COM. IMP. E EXP DE MAQUINAS E EQUIP LTDA ",
// "11120 3/3", new Date("February 4, 2016 10:13:00"),200.00,8,Receivablereceiv
// able_statusEnum.ADD),
// ]
//
// const bankAccounts=[
//   {account:'520',bank:'Poalim',branch:'20'},
//   {account:'340',bank:'Leumi',branch:'2'},
//   {account:'125',bank:'Mizrachi',branch:'5'}
// ]
//  export function fakeBackendFactory (backend: MockBackend, options: BaseRequestOptions) {
//
//    backend.connections.subscribe((connection: MockConnection) => {
//            let testUser = { username: "test", password: "test",
// firstName: 'Test', lastName: 'User' };
//
//
// setTimeout(()=>{
//   // if(connection.request.url.endsWith('recevibales')&& connection.req
// uest.method==RequestMethod.Get){
//   //
//   //   let params=JSON.parse(connection.request.getBody());
//   //
//   //
//   //   if(params.userName==testUser.username && params.password==testUser.password){
//   //     connection.mockRespond(new Response(new ResponseOptions({receivable_status:200,
// body:{token:'fake-jwt-token'}})));
//   //   }
//   //   else {
//   //     connection.mockRespond(new Response(new ResponseOptions({receivable_status:200})));
//   //   }
//   // }
//
//   if(connection.request.url.endsWith('bank-accounts')&& connection.request.method
//  ==RequestMethod.Get){
//     // if(connection.request.headers.get('Authorization')){
//         console.log("come fake backend succses");
//         connection.mockRespond(new Response(new ResponseOptions({
// receivable_status:200,body:bankAccounts})));
//   //  }
//   //  else{
//   //   console.log("come fake backend not auth");
//   //   connection.mockRespond(new Response(new ResponseOptions({r
// eceivable_status:401})));
//   // }
//   }
//
//   if(connection.request.url.endsWith('getCreditLimit')&&
//  connection.request.method==RequestMethod.Get){
//     // if(connection.request.headers.get('Authorization')){
//         console.log("come fake backend succses");
//         connection.mockRespond(new Response(new ResponseOptions({re
// ceivable_status:200,body:4500})));
//   //  }
//   //  else{
//   //   console.log("come fake backend not auth");
//   //   connection.mockRespond(new Response(new ResponseOptions({
// receivable_status:401})));
//   // }
//   }
//
// if(connection.request.url.endsWith('/receivables/risk')&& connection.requ
// est.method==RequestMethod.Get){
// console.log("come fake backend aa");
//     // if(connection.request.headers.get('Authorization')){
//     //     console.log("come fake backend succses");
//     connection.mockRespond(new Response(new ResponseOptions({receiva
// ble_status:200,body:allResivable})));
//   //  }
//   // else{
//   //   console.log("come fake backend not auth");
//   //   connection.mockRespond(new Response(new ResponseOptions({rec
// eivable_status:401})));
//   // }
// }},500)
// });
// return new Http (backend,options);
// }
//
//  export let fakeBackendProvider = {
//      provide: Http,
//      useFactory: fakeBackendFactory,
//      deps: [MockBackend, BaseRequestOptions]
//  };
