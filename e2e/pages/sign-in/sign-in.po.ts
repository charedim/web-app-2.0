import { browser, by, element } from 'protractor';

export class SginInPage {
  navigateTo() {
    return browser.get('/');
  }

  enterEmail(email: string) {
    let emailInputField = element(by.css("input[formControlName=email]"));
   emailInputField.clear();
   emailInputField.sendKeys(email);
  }

  enterPassword(password: string) {
    let passwordInputField = element(by.css("input[formControlName=password]"));
   passwordInputField.clear();
   passwordInputField.sendKeys(password);
  }

  enterCnpj(cnpj: string) {
    let cnpjInputField = element(by.css("input[formControlName=cnpj]"));
   cnpjInputField.clear();
   cnpjInputField.sendKeys(cnpj);
  }

  submit() {
    element(by.css('button[type=submit]')).click();
  }

  forgetPassword() {
    element(by.css('a[routerLink="/password-recovery"]')).click();
  }

  signUp() {
  element(by.css('a[routerLink="/sign-up"]')).click();
  }

  getSubmitButton() {
    return element(by.css('button[type=submit]'));
  }

}
