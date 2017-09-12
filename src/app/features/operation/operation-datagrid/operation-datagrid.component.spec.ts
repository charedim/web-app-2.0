import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationDatagridComponent } from './operation-datagrid.component';
import {AppModule} from '../../../app.module';
describe('OperationDatagridComponent', () => {
  let component: OperationDatagridComponent;
  let fixture: ComponentFixture<OperationDatagridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
