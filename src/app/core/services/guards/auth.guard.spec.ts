import {TestBed, async} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

import {AuthGuard} from './auth.guard';

describe('Guard : AuthGuard', () => {
    let authGuard: AuthGuard;
    const router = {
        navigate: jasmine.createSpy('navigate')
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:   [ FormsModule, CommonModule, HttpModule],
            providers: [ AuthGuard, {provide: Router, useValue: router} ]
        }).compileComponents();

    }));

    beforeEach(() => {
        authGuard = TestBed.get(AuthGuard);

    });

    it('be able to active if token is in local storage', () => {
        localStorage.setItem('currentUser', JSON.stringify( {userName: 'test', token: 'aaa'}));
        expect(authGuard.canActivate()).toBe(true);
    });

    it('not be able to active if token is not in local storage', () => {
        localStorage.removeItem('currentUser');
        expect(authGuard.canActivate()).toBe(false);
    });


});
