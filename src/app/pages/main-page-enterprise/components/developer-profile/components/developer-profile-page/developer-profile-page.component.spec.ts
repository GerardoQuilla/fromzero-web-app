import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperProfilePageComponent } from './developer-profile-page.component';

describe('DeveloperProfilePageComponent', () => {
  let component: DeveloperProfilePageComponent;
  let fixture: ComponentFixture<DeveloperProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperProfilePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
