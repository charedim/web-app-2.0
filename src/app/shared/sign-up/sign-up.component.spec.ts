import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed, getTestBed, async, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { AppModule } from '../../app.module';
let comp: SignUpComponent;
let fixture: ComponentFixture<SignUpComponent>;
const validUser = {
  email: 'shulamit@work.capital',
  cnpj: '90.344.652/0001-36',
  password: '111111111aaaaaaaaaA!',
  confirmPassword: '111111111aaaaaaaaaA!'
};

describe('Sign-up', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SignUpComponent);
        comp = fixture.componentInstance;
      });
  }));

  function updateAllForm() {
    comp.signupForm.controls['email'].setValue(validUser.email);
    comp.signupForm.controls['cnpj'].setValue(validUser.cnpj);
    comp.signupForm.controls['password'].setValue(validUser.password);
    comp.signupForm.controls['confirmPassword'].setValue(validUser.confirmPassword);
  }

  function updateForm(controlName: string, newValue) {
   updateAllForm();
    comp.signupForm.controls[controlName].setValue(newValue);
  }

  it('form value should update from form changes', fakeAsync(() => {
    updateAllForm();
    expect(comp.signupForm.value).toEqual(validUser);
  }));

  it('Valid should be true when form is valid', fakeAsync(() => {
    updateAllForm();
    expect(comp.signupForm.valid).toBeTruthy();
  }));

  it('isValid should be false when email is invalid', fakeAsync(() => {
    updateForm('email', 'shulamit');
   fixture.detectChanges();
   console.log(comp.signupForm.value);
    expect(comp.signupForm.valid).toBeFalsy();
  }));

  it('isValid should be false when email is empty ', fakeAsync(() => {
    updateForm('email', '');
    expect(comp.signupForm.valid).toBeFalsy();
  }));

  it('isValid should be false when cnpj is invalid', fakeAsync(() => {
    updateForm('cnpj', '111');
    expect(comp.signupForm.valid).toBeFalsy();
  }));

  it('isValid should be false when cnpj is empty ', fakeAsync(() => {
    updateForm('cnpj', '');
    expect(comp.signupForm.valid).toBeFalsy();
  }));


  it('isValid should be false when password is invalid', fakeAsync(() => {
    updateForm('password', '11111111aa');
    updateForm('confirmPassword', '11111111aa');
    expect(comp.signupForm.valid).toBeFalsy();
  }));

  it('isValid should be false when password is empty ', fakeAsync(() => {
    updateForm('password', '');
      updateForm('confirmPassword', '');
    expect(comp.signupForm.valid).toBeFalsy();
  }));

  it('isValid should be false when password-confirm is invalid', fakeAsync(() => {
    updateForm('confirmPassword', '11111111aa');
    expect(comp.signupForm.valid).toBeFalsy();
  }));

  it('isValid should be false when password-confirm is empty ', fakeAsync(() => {
    updateForm('confirmPassword', '');
    expect(comp.signupForm.valid).toBeFalsy();
  }));
});
