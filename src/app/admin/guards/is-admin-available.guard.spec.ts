import { TestBed } from '@angular/core/testing';

import { IsAdminAvailableGuard } from './is-admin-available.guard';

describe('IsAdminAvailableGuard', () => {
  let guard: IsAdminAvailableGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminAvailableGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
