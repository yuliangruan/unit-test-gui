import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { ServiceBase } from './service-base';

import { TestSet } from '../mdls/test-set';
import { Test } from '../mdls/test';
@Injectable()
export class TestSetService extends ServiceBase {

  constructor(http:HttpClient) { super(http); }

  discover = (set?:TestSet):Observable<any> => {
  	var obs=new Observable<any>( (observer) => {
		if (this.production) {
	  		this._get({
		  		method:'getSet',
		  		identifier:set.identifier
		  	}).subscribe(res => {
				observer.next(this.parseResult(res));
		  	});
		}

		Observable.of(new Object()).mapTo({
			identifier:'dummy set',
			tests: [
				new Test({identifier: 'dummy-test-1'}),
				new Test({identifier: 'dummy-test-2'}),
				new Test({identifier: 'dummy-test-3'})
			]	
		}).subscribe(res => {
			observer.next(this.parseResult(res));
		})
	});
	return obs;
  }

  parseResult = (res) => {
	var testset=new TestSet({
		identifier:res.identifier,
		tests: []
	});

	res.tests.forEach((test) => {
		testset.add(new Test({
			identifier:test.identifier
		}));
	});

	return testset;
  }
}
