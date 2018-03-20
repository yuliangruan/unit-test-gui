import {Test} from './test';
import {TestStatus} from './test-status.enum';
import {TestResultStatus} from './test-result-status.enum';

export class StatusSummary {
	READY:number=0;
	RUNNING:number=0;
	PASS:number=0;
	FAIL:number=0;
	ERROR:number=0;
};

export class TestContainer {
	identifier:string;

	container:Array<any>=new Array<any>();

	counts:StatusSummary=new StatusSummary();

	/**
	 * counts this container's worth of test status and result statuses.   will recurse into container's container if detected
	 *
	 * @return     { StatusSummary }  { a summary of all statuses in this container }
	 */
	public recount():StatusSummary {
		let newcounts=new StatusSummary();

		for (let elem of this.container) {
			//if elem is a singular test, 
			if (elem instanceof Test) {
				if (elem.status==TestStatus.READY)
					newcounts.READY++;
				else if (elem.status==TestStatus.RUNNING)
					newcounts.RUNNING++;

				if (elem.results.length > 0) {
					if (elem.results[elem.results.length-1].status==TestResultStatus.PASS)
						newcounts.PASS++;
					else if (elem.results[elem.results.length-1].status==TestResultStatus.FAIL)
						newcounts.FAIL++;
					else if (elem.results[elem.results.length-1].status==TestResultStatus.ERROR)
						newcounts.ERROR++;
				}
			} else if (elem instanceof TestContainer) {
				let contained_counts=elem.recount();
				newcounts.READY+=contained_counts.READY;
				newcounts.RUNNING+=contained_counts.RUNNING;
				newcounts.PASS+=contained_counts.PASS;
				newcounts.FAIL+=contained_counts.FAIL;
				newcounts.ERROR+=contained_counts.ERROR;
			}
		}
		this.counts=newcounts;
		return newcounts;
	}
}
