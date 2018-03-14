import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { ServiceBase } from './service-base';

import { TestComponent } from '../comps/test/test.component';

import { TestResult } from '../mdls/test-result';
import { TestResultStatus } from '../mdls/test-result-status.enum';

@Injectable()
export class TestService extends ServiceBase {

  constructor(private http?:HttpClient) { super(http); }

  run = (testComp:TestComponent):Observable<any> => {
  	var obs=new Observable<any>( (observer) => {
	  	if (this.production) {
	  		this._get({
		  		method:'runTest',
		  		identifier:testComp.test.identifier
		  	}).subscribe(res => {
				observer.next(this.parseResult(res));
		  	});
		} else {
			(Math.floor(Math.random()*2))?
				Observable.of(new Object()).mapTo({
					identifier:testComp.test.identifier,
					result: {
						status: 'Pass',
						error: '',
						message:'some message',
						data:'some data'
					}  			
				}).subscribe(res => {
					observer.next(this.parseResult(res));
				})
				:
				Observable.of(new Object()).mapTo({
					identifier:'testComp.test.identifier',
					result: {
						status: 'Fail',
						error: 'some error',
						message:'some message',
						data:'some data'
					}  			
				}).subscribe(res => {
					observer.next(this.parseResult(res));
				})

		}
	});
	return obs;
  }

  parseResult = (res):TestResult => {
		let status:TestResultStatus;

  		switch (res.result.status) {
  			case 'Pass' : { status=TestResultStatus.Pass; break; }
  			case 'Fail' : { status=TestResultStatus.Fail; break; }
  			case 'Error' : { status=TestResultStatus.Error; break; }
  		}
	return new TestResult({
			status:status,
			error:res.result.error,
			message:res.result.message,
			data:res.result.data
	})	
  }
}
