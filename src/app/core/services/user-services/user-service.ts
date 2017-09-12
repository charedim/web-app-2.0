import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {ApiService} from '../api.services';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class UserService {
    constructor( private apiService: ApiService) {
    }



}
