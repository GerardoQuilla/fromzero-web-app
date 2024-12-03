import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingfordevelopComponent } from './lookingfordevelop.component';

describe('LookingfordevelopComponent', () => {
  let component: LookingfordevelopComponent;
  let fixture: ComponentFixture<LookingfordevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LookingfordevelopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LookingfordevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
