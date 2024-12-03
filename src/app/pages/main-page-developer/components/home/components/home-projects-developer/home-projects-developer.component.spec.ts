import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectsDeveloperComponent } from './home-projects-developer.component';

describe('HomeProjectsDeveloperComponent', () => {
  let component: HomeProjectsDeveloperComponent;
  let fixture: ComponentFixture<HomeProjectsDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProjectsDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeProjectsDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
