import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { Test } from '../../mdls/test';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [],
      declarations: [ TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.test=new Test({identifier:'mocktest'});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have @Input of type Test', () => {
    expect(component.test instanceof Test).toBeTruthy();
  });

});
