import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtodoComponent } from './childtodo.component';

describe('ChildtodoComponent', () => {
  let component: ChildtodoComponent;
  let fixture: ComponentFixture<ChildtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
