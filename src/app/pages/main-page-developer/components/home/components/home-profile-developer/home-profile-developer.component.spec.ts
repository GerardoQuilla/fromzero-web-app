import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfileDeveloperComponent } from './home-profile-developer.component';

describe('HomeProfileDeveloperComponent', () => {
  let component: HomeProfileDeveloperComponent;
  let fixture: ComponentFixture<HomeProfileDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProfileDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeProfileDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
