import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceDataComponent } from './appearance-data.component';

describe('AppearanceDataComponent', () => {
  let component: AppearanceDataComponent;
  let fixture: ComponentFixture<AppearanceDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppearanceDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearanceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
