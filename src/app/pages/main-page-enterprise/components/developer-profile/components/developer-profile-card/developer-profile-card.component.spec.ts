import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperProfileCardComponent } from './developer-profile-card.component';

describe('DeveloperProfileCardComponent', () => {
  let component: DeveloperProfileCardComponent;
  let fixture: ComponentFixture<DeveloperProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperProfileCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
