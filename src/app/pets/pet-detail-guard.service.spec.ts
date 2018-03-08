import { TestBed, inject } from '@angular/core/testing';

import { PetDetailGuardService } from './pet-detail-guard.service';

describe('PetDetailGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetDetailGuardService]
    });
  });

  it('should be created', inject([PetDetailGuardService], (service: PetDetailGuardService) => {
    expect(service).toBeTruthy();
  }));
});
