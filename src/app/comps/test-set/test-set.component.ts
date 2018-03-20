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
  @ViewChildren(TestComponent) tests: QueryList<TestComponent>;
  constructor() { }

  ngOnInit() {
  }

  runTestSet() {
  	this.tests.forEach(test => test.runTest());
  }

  /**
   * one of the container's tests ran.  recount the status
   *
   * @param      {Event}  event   The event
   * @return     {void}  { no return }
   */
  onTestRun(event) {
    this.testset.recount();
  }
}
