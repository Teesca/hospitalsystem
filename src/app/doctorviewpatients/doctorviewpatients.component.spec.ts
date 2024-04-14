import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorviewpatientsComponent } from './doctorviewpatients.component';

describe('DoctorviewpatientsComponent', () => {
  let component: DoctorviewpatientsComponent;
  let fixture: ComponentFixture<DoctorviewpatientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorviewpatientsComponent]
    });
    fixture = TestBed.createComponent(DoctorviewpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
