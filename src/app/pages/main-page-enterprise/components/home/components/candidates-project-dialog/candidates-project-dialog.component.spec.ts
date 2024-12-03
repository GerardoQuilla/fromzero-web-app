import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesProjectDialogComponent } from './candidates-project-dialog.component';

describe('CandidatesProjectDialogComponent', () => {
  let component: CandidatesProjectDialogComponent;
  let fixture: ComponentFixture<CandidatesProjectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatesProjectDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatesProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
