import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ComponentEventsService } from '../../svcs/component-events.service';

import { Test } from '../../mdls/test';
import { TestStatus } from '../../mdls/test-status.enum';
import { TestResult } from '../../mdls/test-result';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [ComponentEventsService]
})
export class TestComponent implements OnInit {
  @Input() test:Test;
  private testStatus=TestStatus;//map so view can use it

  constructor(private compeventservice:ComponentEventsService) { }

  ngOnInit() {
  }

  runTest() {
  	this.compeventservice.runTest(this).subscribe( (res:TestResult) => {
      this.test.addResult(res);
    });
  }
}
