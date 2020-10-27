import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerRankComponent } from './beer-rank.component';

describe('BeerRankComponent', () => {
  let component: BeerRankComponent;
  let fixture: ComponentFixture<BeerRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerRankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
