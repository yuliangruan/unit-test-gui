import { Component, OnInit } from '@angular/core';

import { TestSetService } from './svcs/test-set.service';
import { TestService } from './svcs/test.service';

import { TestSet } from './mdls/test-set';
import { TestResult } from './mdls/test-result';
import { TestResultStatus } from './mdls/test-result-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent {
  title = 'Unit Test Runner';
  testset:TestSet=new TestSet('dummy set');

  constructor(private testsetService:TestSetService, private testService:TestService) {

  }
  ngOnInit() {
  	//run test-set service to discover tests
  	this.testsetService.discover().subscribe(res => {
		this.testset.addAll(res.tests);
  	});
			
	// var test=new Test({identifier:'sometest'});
	// var testCtlr = new TestController(test,this.testService);
	// //testCtlr.run();
  	 	
  }
}
