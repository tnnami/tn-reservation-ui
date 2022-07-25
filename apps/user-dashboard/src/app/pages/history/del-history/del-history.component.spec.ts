import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelHistoryComponent } from './del-history.component';

describe('DelHistoryComponent', () => {
  let component: DelHistoryComponent;
  let fixture: ComponentFixture<DelHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DelHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DelHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
