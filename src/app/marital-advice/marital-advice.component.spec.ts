import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalAdviceComponent } from './marital-advice.component';

describe('MaritalAdviceComponent', () => {
  let component: MaritalAdviceComponent;
  let fixture: ComponentFixture<MaritalAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalAdviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaritalAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
