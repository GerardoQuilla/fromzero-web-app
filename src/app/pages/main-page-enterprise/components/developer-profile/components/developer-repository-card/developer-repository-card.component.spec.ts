import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperRepositoryCardComponent } from './developer-repository-card.component';

describe('DeveloperRepositoryCardComponent', () => {
  let component: DeveloperRepositoryCardComponent;
  let fixture: ComponentFixture<DeveloperRepositoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperRepositoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperRepositoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
