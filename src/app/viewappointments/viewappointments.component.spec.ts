import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewappointmentsComponent } from './viewappointments.component';

describe('ViewappointmentsComponent', () => {
  let component: ViewappointmentsComponent;
  let fixture: ComponentFixture<ViewappointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewappointmentsComponent]
    });
    fixture = TestBed.createComponent(ViewappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
