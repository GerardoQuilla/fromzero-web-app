import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authDeveloperGuard } from './auth-developer.guard';

describe('authDeveloperGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authDeveloperGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
