import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {ApiService} from '../api.services';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../authentication/authentication.service';
import { Receivable } from '../../models/receivable.model';

@Injectable()
export class UserProfileService {
    constructor( private apiService: ApiService) {
    }


  geProfile() {
    const params: URLSearchParams = new URLSearchParams();
       params.set('id', 'id');
       this.apiService.get('f', params);

  }

  changePassword(newPassword) {
    return this.apiService.post('change-password', { newPassword });
  }
}
