import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastingsComponent } from './tastings.component';

describe('TastingsComponent', () => {
  let component: TastingsComponent;
  let fixture: ComponentFixture<TastingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TastingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TastingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
