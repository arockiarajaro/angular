import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Officeaddress3Component } from './officeaddress3.component';

describe('Officeaddress3Component', () => {
  let component: Officeaddress3Component;
  let fixture: ComponentFixture<Officeaddress3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Officeaddress3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Officeaddress3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
