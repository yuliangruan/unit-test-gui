import { TestResultStatus } from './test-result-status.enum';

export class TestResult {
	status:TestResultStatus;
	error:string;
	message:string;
	data:any;

	constructor(param:{
		status:TestResultStatus,
		error?:string,
		message?:string,
		data?:any
	}) {
		this.status=param.status;
		this.error=param.error;
		this.message=param.message;
		this.data=param.data;
	}
}
