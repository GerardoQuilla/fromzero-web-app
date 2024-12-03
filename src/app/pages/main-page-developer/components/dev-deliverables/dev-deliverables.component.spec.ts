import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevDeliverablesComponent } from './dev-deliverables.component';

describe('DevDeliverablesComponent', () => {
  let component: DevDeliverablesComponent;
  let fixture: ComponentFixture<DevDeliverablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevDeliverablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevDeliverablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
