import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifePartnerComponent } from './life-partner.component';

describe('LifePartnerComponent', () => {
  let component: LifePartnerComponent;
  let fixture: ComponentFixture<LifePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifePartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
