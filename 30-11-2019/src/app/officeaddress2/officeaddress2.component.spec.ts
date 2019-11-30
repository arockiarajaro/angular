import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Officeaddress2Component } from './officeaddress2.component';

describe('Officeaddress2Component', () => {
  let component: Officeaddress2Component;
  let fixture: ComponentFixture<Officeaddress2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Officeaddress2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Officeaddress2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
