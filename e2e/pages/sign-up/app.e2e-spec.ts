import { SginUpPage } from './sign-up.po';
import { browser } from 'protractor';

describe('sign-up', () => {
  let page: SginUpPage;

  beforeEach(() => {
    page = new SginUpPage();
  });

  it('should submit button not enable when from is empty', () => {
    page.navigateTo();
     browser.setLocation('/sign-up');
    expect(browser.getCurrentUrl()).toEqual('aa');
  });

  // it('should submit button enable when form is full', () => {
  //   page.navigateTo();
  //   page.enterEmail('test2@work.cpital');
  //   page.enterCnpj('90.344.652/0001-36');
  //   page.enterPassword('111111111aaaaaaaaaA!');
  //   expect(page.getSubmitButton().isEnabled()).toEqual(true);
  // });
  //
  // it('should route to forget password', () => {
  //   page.forgetPassword();
  //   expect(browser.getCurrentUrl()).toContain('/password-recovery');
  // });
  //
  // it('should route to sgin up', () => {
  //   page.signUp();
  //   expect(browser.getCurrentUrl()).toContain('/sign-up');
  // });
  //
  // it('should submit button enable when form is full', () => {
  //   page.navigateTo();
  //   page.enterEmail('test2@work.cpital');
  //   page.enterCnpj('90.344.652/0001-36');
  //   page.enterPassword('111111111aaaaaaaaaA!');
  //   page.submit();
  //   expect(browser.getCurrentUrl()).toContain('/operation');
  // });

});
