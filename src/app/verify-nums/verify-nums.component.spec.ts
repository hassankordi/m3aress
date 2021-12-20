import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNumsComponent } from './verify-nums.component';

describe('VerifyNumsComponent', () => {
  let component: VerifyNumsComponent;
  let fixture: ComponentFixture<VerifyNumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyNumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyNumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
