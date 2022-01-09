import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalDetailesComponent } from './marital-detailes.component';

describe('MaritalDetailesComponent', () => {
  let component: MaritalDetailesComponent;
  let fixture: ComponentFixture<MaritalDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
