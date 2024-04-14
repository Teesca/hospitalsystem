import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpatientComponent } from './bookpatient.component';

describe('BookpatientComponent', () => {
  let component: BookpatientComponent;
  let fixture: ComponentFixture<BookpatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookpatientComponent]
    });
    fixture = TestBed.createComponent(BookpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
