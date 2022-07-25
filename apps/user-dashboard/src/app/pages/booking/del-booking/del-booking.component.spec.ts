import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelBookingComponent } from './del-booking.component';

describe('DelBookingComponent', () => {
  let component: DelBookingComponent;
  let fixture: ComponentFixture<DelBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelBookingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DelBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
