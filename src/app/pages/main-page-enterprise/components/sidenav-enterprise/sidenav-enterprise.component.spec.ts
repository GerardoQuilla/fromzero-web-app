import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavEnterpriseComponent } from './sidenav-enterprise.component';

describe('SidenavEnterpriseComponent', () => {
  let component: SidenavEnterpriseComponent;
  let fixture: ComponentFixture<SidenavEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavEnterpriseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
