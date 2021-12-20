import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendUsComponent } from './send-us.component';

describe('SendUsComponent', () => {
  let component: SendUsComponent;
  let fixture: ComponentFixture<SendUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
