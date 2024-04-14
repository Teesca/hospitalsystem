import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordescriptionComponent } from './doctordescription.component';

describe('DoctordescriptionComponent', () => {
  let component: DoctordescriptionComponent;
  let fixture: ComponentFixture<DoctordescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctordescriptionComponent]
    });
    fixture = TestBed.createComponent(DoctordescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
