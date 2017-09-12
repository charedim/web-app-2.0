import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


  // export const  api_url="http://localhost:4010/v3/"
@Injectable()
export class ApiService {
     //api_url = 'http://zpt7bact5nj9okyhc-mock.stoplight-proxy.io/v3/';
     api_url = "http://localhost:4010/v1/";

  constructor( private http: Http) {}
  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin' : '*'
      // 'Access-Control-Allow-Origin': 'http://localhost:4010',
      // 'Access-Control-Allow-Credentials': true
    };

    if ( localStorage.getItem('currentUser') ) {
     headersConfig['Authorization'] = `Token ${JSON.parse(localStorage.getItem('currentUser'))}`;
   }
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     console.log('err', error);
     return Observable.throw(error);
  }

   // for Http
  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${this.api_url}${path}`, { headers: this.setHeaders(), search: params })
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

//  for Http client
//   get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
//     return this.http.get(`${this.api_url}${path}`, { headers: this.setHeaders() })
//     .catch(this.formatErrors)
//     .map((res: Response) => res.json());
//   }


  put(path: string, body: Object = {}): Observable<any> {

    return this.http.put(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}) {
    return this.http.post(
      `${this.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.api_url}${path}`,
      { headers: this.setHeaders() }
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }
}
