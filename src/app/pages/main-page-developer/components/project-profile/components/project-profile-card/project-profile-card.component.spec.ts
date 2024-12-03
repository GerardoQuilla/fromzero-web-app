import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfileCardComponent } from './project-profile-card.component';

describe('ProjectProfileCardComponent', () => {
  let component: ProjectProfileCardComponent;
  let fixture: ComponentFixture<ProjectProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectProfileCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
