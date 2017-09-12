// import { TestBed, async } from '@angular/core/testing';
// import {HttpModule,XHRBackend,ResponseOptions} from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { inject } from '@angular/core/testing';
// import {ApiService} from './api.services'
// describe('MockBackend: LanguagesServiceHttp', () => {
//   let mockbackend, service;
//
//   //setup
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpModule],
//       providers: [
//         ApiService,
//         { provide: XHRBackend, useClass: MockBackend },
//
//       ]
//     })
//   });
//
//   beforeEach(inject([ApiService, XHRBackend], (_service, _mockbackend) => {
//     service = _service;
//     mockbackend = _mockbackend;
//   }));
//
//   //specs
//   it('should return mocked response (sync)', () => {
//     let response = {token:null};
//     mockbackend.connections.subscribe(connection => {
//       connection.mockRespond(new Response(new ResponseOptions({
//         body: JSON.stringify(response)
//       })));
//     });
//     service.post('yu', response).subscribe(res => {
//       expect(res.token).toBe(null);
//     });
//   });
// })





// import { TestBed, async } from '@angular/core/testing';
// import {HttpModule,XHRBackend,ResponseOptions} from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { inject } from '@angular/core/testing';
//
// import {AuthenticationService} from './authentication/authentication.service'
// import {ApiService} from './api.services'
//
// describe('MockBackend: LanguagesServiceHttp', () => {
//   let mockbackend, service;

  // setup
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpModule],
//       providers: [
//         ApiService,
//         { provide: XHRBackend, useClass: MockBackend },
//
//       ]
//     })
//   });
//
//   beforeEach(inject([ApiService, XHRBackend], (_service, _mockbackend) => {
//     service = _service;
//     mockbackend = _mockbackend;
//   }));
//
//   //specs
//   it('should return mocked response (sync)', () => {
//     let response = ["aa","bb"];
//     mockbackend.connections.subscribe(connection => {
//       connection.mockRespond(new Response(new ResponseOptions({
//         body: JSON.stringify(response)
//       })));
//     });
//     service.get("aa",{userName:10}).subscribe(data => {
//       console.log(data);
//       expect(data).toContain('b');
//     });
//   });
// })
