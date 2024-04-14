import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookdoctorappComponent } from './bookdoctorapp.component';

describe('BookdoctorappComponent', () => {
  let component: BookdoctorappComponent;
  let fixture: ComponentFixture<BookdoctorappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookdoctorappComponent]
    });
    fixture = TestBed.createComponent(BookdoctorappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
