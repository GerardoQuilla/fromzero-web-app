import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDeveloperComponent } from './sidenav-developer.component';

describe('SidenavDeveloperComponent', () => {
  let component: SidenavDeveloperComponent;
  let fixture: ComponentFixture<SidenavDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavDeveloperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
