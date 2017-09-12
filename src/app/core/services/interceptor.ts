// import {Injectable} from '@angular/core';
// import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable'
//
// @Injectable()
// export class myTryInterceptor implements HttpInterceptor{
// intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
//   console.log('interspect');
//   const authReq=req.clone({
//     headers:req.headers.set('Authorization','token')
//   });
//   return next.handle(authReq).do(r=>console.log(r));
// }
//
//
// }
