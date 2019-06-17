import { TestBed } from '@angular/core/testing';

import { JumpService } from './jump.service';

describe('JumpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JumpService = TestBed.get(JumpService);
    expect(service).toBeTruthy();
  });
});
