import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TestService } from './test.service';
import { TestSetService } from './test-set.service';

import { TestSet } from '../mdls/test-set';

import { TestComponent } from '../comps/test/test.component';

@Injectable()
export class ComponentEventsService {

  constructor(private testService:TestService, private testSetService:TestSetService) { }

  runTest = (testComp:TestComponent):Observable<any> => {
  	return this.testService.run(testComp);
  }

  discover = (testSet?: TestSet):Observable<any> => {
  	return this.testSetService.discover(testSet);
  }
}
