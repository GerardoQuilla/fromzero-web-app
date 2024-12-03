import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAcceptDeliverableComponent } from './dialog-accept-deliverable.component';

describe('DialogAcceptDeliverableComponent', () => {
  let component: DialogAcceptDeliverableComponent;
  let fixture: ComponentFixture<DialogAcceptDeliverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogAcceptDeliverableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAcceptDeliverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
