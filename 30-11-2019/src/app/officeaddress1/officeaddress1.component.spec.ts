import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Officeaddress1Component } from './officeaddress1.component';

describe('Officeaddress1Component', () => {
  let component: Officeaddress1Component;
  let fixture: ComponentFixture<Officeaddress1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Officeaddress1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Officeaddress1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
