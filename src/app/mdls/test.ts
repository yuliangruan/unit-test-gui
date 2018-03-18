import { TestResult } from './test-result';
import { TestStatus } from './test-status.enum';
import { TestResultStatus } from './test-result-status.enum';

export class Test {
	identifier:string;
	desc:string='desc';
	status: TestStatus=TestStatus.READY;
	results:TestResult[]=[];

	constructor(param:{
		identifier:string,
		desc?:string
	}) {
		this.identifier=param.identifier;
		if (param.desc) this.desc=param.desc;
	};

	addResult = (param: {
		status:TestResultStatus,
		error:string,
		message:string,
		data:any
	}) => {
		this.results.push(new TestResult({
			status:param.status,
			error:param.error,
			message:param.message,
			data:param.data
		}))
	}
}
