import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileDeveloperDialogComponent } from './edit-profile-developer-dialog.component';

describe('EditProfileDeveloperDialogComponent', () => {
  let component: EditProfileDeveloperDialogComponent;
  let fixture: ComponentFixture<EditProfileDeveloperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfileDeveloperDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditProfileDeveloperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
