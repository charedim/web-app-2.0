import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryComponent } from './password-recovery.component';
import {AppModule} from '../../app.module';

describe('PasswordRecoveryComponent', () => {
  let component: PasswordRecoveryComponent;
  let fixture: ComponentFixture<PasswordRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
