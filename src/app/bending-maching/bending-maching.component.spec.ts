import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendingMachingComponent } from './bending-maching.component';

describe('BendingMachingComponent', () => {
  let component: BendingMachingComponent;
  let fixture: ComponentFixture<BendingMachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendingMachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BendingMachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
