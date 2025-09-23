import { TestBed } from '@angular/core/testing';

import { CropYieldPredictionService } from './crop-yield-prediction.service';

describe('CropYieldPredictionService', () => {
  let service: CropYieldPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropYieldPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
