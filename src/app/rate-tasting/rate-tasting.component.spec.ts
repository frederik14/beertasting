import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateTastingComponent } from './rate-tasting.component';

describe('RateTastingComponent', () => {
  let component: RateTastingComponent;
  let fixture: ComponentFixture<RateTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateTastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
