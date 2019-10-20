import { TestBed } from '@angular/core/testing';

import { DragonballService } from './dragonball.service';

describe('DragonballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragonballService = TestBed.get(DragonballService);
    expect(service).toBeTruthy();
  });
});
