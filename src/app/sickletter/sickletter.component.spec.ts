import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SickletterComponent } from './sickletter.component';

describe('SickletterComponent', () => {
  let component: SickletterComponent;
  let fixture: ComponentFixture<SickletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SickletterComponent]
    });
    fixture = TestBed.createComponent(SickletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
