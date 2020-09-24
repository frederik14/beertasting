import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTastingComponent } from './add-tasting.component';

describe('AddTastingComponent', () => {
  let component: AddTastingComponent;
  let fixture: ComponentFixture<AddTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTastingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
