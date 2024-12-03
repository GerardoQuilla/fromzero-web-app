import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentsDialogComponent } from './list-payments-dialog.component';

describe('ListPaymentsDialogComponent', () => {
  let component: ListPaymentsDialogComponent;
  let fixture: ComponentFixture<ListPaymentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPaymentsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPaymentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
