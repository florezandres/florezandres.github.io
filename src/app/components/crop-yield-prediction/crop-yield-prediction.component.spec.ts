import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropYieldPredictionComponent } from './crop-yield-prediction.component';

describe('CropYieldPredictionComponent', () => {
  let component: CropYieldPredictionComponent;
  let fixture: ComponentFixture<CropYieldPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropYieldPredictionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropYieldPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
