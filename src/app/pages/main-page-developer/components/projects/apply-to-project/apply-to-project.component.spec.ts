import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToProjectComponent } from './apply-to-project.component';

describe('ApplyToProjectComponent', () => {
  let component: ApplyToProjectComponent;
  let fixture: ComponentFixture<ApplyToProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyToProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
