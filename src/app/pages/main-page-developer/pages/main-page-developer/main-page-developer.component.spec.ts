import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDeveloperComponent } from './main-page-developer.component';

describe('MainPageDeveloperComponent', () => {
  let component: MainPageDeveloperComponent;
  let fixture: ComponentFixture<MainPageDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
