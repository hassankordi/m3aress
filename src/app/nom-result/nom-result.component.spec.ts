import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomResultComponent } from './nom-result.component';

describe('NomResultComponent', () => {
  let component: NomResultComponent;
  let fixture: ComponentFixture<NomResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
