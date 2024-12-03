import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDeveloperComponent } from './pay-developer.component';

describe('PayDeveloperComponent', () => {
  let component: PayDeveloperComponent;
  let fixture: ComponentFixture<PayDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
