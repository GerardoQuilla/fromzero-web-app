import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDeliverableComponent } from './send-deliverable.component';

describe('SendDeliverableComponent', () => {
  let component: SendDeliverableComponent;
  let fixture: ComponentFixture<SendDeliverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendDeliverableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendDeliverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
