import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

import { ServiceBase } from './service-base';

import { Test } from '../mdls/test';
import { TestResult } from '../mdls/test-result';
import { TestStatus } from '../mdls/test-status.enum';
import { TestResultStatus } from '../mdls/test-result-status.enum';

@Injectable()
export class TestService extends ServiceBase {

  constructor(private http?:HttpClient) { super(http); }

  run = (test:Test):Observable<any> => {
  	var obs=new Observable<any>( (observer) => {
	  	if (this.production) {
	  		this._get({
		  		method:'runTest',
		  		identifier:test.identifier
		  	}).subscribe(res => {
				observer.next(this.parseResult(res));
		  	});
		} else {
			(Math.floor(Math.random()*2))?
				Observable.of(new Object()).mapTo({
					identifier:test.identifier,
					result: {
						status: 'Pass',
						error: '',
						message:'some message',
						data:'some data'
					}  			
				}).subscribe(res => {
					//simulate real call delay for UI
					setTimeout(function(observer,self,res){
						observer.next(self.parseResult(res));
					},150,observer,this,res);
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
					//simulate real call delay for UI
					setTimeout(function(observer,self,res){
						observer.next(self.parseResult(res));
					},0,observer,this,res);
				})

		}
	});
	return obs;
  }

  parseResult = (res):TestResult => {
		let status:TestResultStatus;

  		switch (res.result.status.toUpperCase()) {
  			case 'PASS' : { status=TestResultStatus.PASS; break; }
  			case 'FAIL' : { status=TestResultStatus.FAIL; break; }
  			case 'ERROR' : { status=TestResultStatus.ERROR; break; }
  		}
	return new TestResult({
			status:status,
			error:res.result.error,
			message:res.result.message,
			data:res.result.data
	})	
  }
}
