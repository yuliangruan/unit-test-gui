import {TestContainer} from './test-container';

import {Test} from './test';
import {TestService} from '../svcs/test.service';

export class TestSet extends TestContainer {
	identifier:string='testset';

	constructor(param:{
		identifier:string,
		tests: {
			identifier: string;
		}[]
	}) {
		super();
		this.identifier=param.identifier;
		if (param.tests) {
			param.tests.forEach((test) => {
				this.container.push(
					<Test>{
						identifier:test.identifier
					}
				);
			});
		}
	}

	add = (test:Test):TestSet => {
		this.container.push(test);
		return this;
	}

	addAll = (tests:Test[]):TestSet => {
		this.container=this.container.concat(tests);
		return this;
	}
}
