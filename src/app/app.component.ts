import { Component, OnInit } from '@angular/core';

import { ComponentEventsService } from './svcs/component-events.service';

import { TestSet } from './mdls/test-set';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
  title = 'Unit Test Runner';
  testset:TestSet=new TestSet({identifier:'dummy set',tests:[]});

  constructor(private componentEventsService:ComponentEventsService) { }

  ngOnInit() {
  	//run test-set service to discover tests
  	this.componentEventsService.discover(this.testset).subscribe((res:TestSet) => {
		  this.testset.addAll(res.container);
  	});
  }
}
