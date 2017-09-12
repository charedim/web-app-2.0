import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed, getTestBed, async,
         fakeAsync, ComponentFixture } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { AppModule } from '../../app.module';

let comp: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
const validUser = {
   email:    'shulamit@gmail.com',
   password: 'aaaaaaa111111!Aa',
   cnpj:     '90.344.652/0001-36' };

describe('Login', () => {

  function updateForm(email, password, cnpj) {
    comp.signinForm.controls['email'].setValue(email);
    comp.signinForm.controls['password'].setValue(password);
    comp.signinForm.controls['cnpj'].setValue(cnpj);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
  });

  it('form value should update from form changes', fakeAsync(() => {
    updateForm( validUser.email, validUser.password, validUser.cnpj );
    expect(comp.signinForm.value).toEqual(validUser);
  }));

  it('isValid should be false when form is invalid', fakeAsync(() => {
    updateForm('shulamit', '' , '11');
    expect(comp.signinForm.valid).toBeFalsy();
  }));

  it('isValid should be true when form is valid', fakeAsync(() => {
    updateForm( validUser.email, validUser.password, validUser.cnpj );
    expect(comp.signinForm.valid).toBeTruthy();
  }));

  it('isValid should be false when email is invalid - without @ careacter', fakeAsync(() => {
    updateForm( 'testgmail.com', validUser.password, validUser.cnpj);
    expect(comp.signinForm.valid).toBeFalsy();
  }));

  it('isValid should be false when cnpj is invalid', fakeAsync(() => {
    updateForm( validUser.email, validUser.password, '1414');
    expect(comp.signinForm.valid).toBeFalsy();
  }));

  it('isValid should be false when password is empty', fakeAsync(() => {
    updateForm( validUser.email, '', validUser.cnpj );
    expect(comp.signinForm.valid).toBeFalsy();
  }));

  it('isValid should be false when email is empty', fakeAsync(() => {
    updateForm('', validUser.password, validUser.cnpj);
    expect(comp.signinForm.valid).toBeFalsy();
  }));

  it('isValid should be false when cnpj is empty', fakeAsync(() => {
    updateForm(validUser.email, validUser.password, '');
    expect(comp.signinForm.valid).toBeFalsy();
  }));


  it('should create a `FormGroup` comprised of `FormControl`s', () => {
       comp.ngOnInit();
       expect(comp.signinForm instanceof FormGroup).toBe(true);
   });

});
