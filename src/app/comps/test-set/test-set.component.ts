import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

import { TestSet } from '../../mdls/test-set';

import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-test-set',
  templateUrl: './test-set.component.html',
  styleUrls: ['./test-set.component.css']
})
export class TestSetComponent implements OnInit {
  @Input() testset:TestSet;
  @Output() onRunTestSet:EventEmitter<any> = new EventEmitter<any>();
  @ViewChildren(TestComponent) tests: QueryList<TestComponent>;
  constructor() { }

  ngOnInit() {
  }

  runTestSet(event) {
  	this.tests.forEach(test => test.runTest());
  }
}
