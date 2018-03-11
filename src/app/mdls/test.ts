import { TestResult } from './test-result';
import { TestResultStatus } from './test-result-status.enum';

export class Test {
	identifier:string;
	desc:string='desc';
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
