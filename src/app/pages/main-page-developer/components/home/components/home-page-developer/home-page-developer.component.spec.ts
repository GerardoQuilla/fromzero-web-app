import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDeveloperComponent } from './home-page-developer.component';

describe('HomePageDeveloperComponent', () => {
  let component: HomePageDeveloperComponent;
  let fixture: ComponentFixture<HomePageDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomePageDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
