import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestService } from './test.service';
import { ServiceBase } from './service-base';
import { Test } from '../mdls/test';

import { environment } from '../../environments/environment';

describe('TestService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestService]
    });

    service=TestBed.get(TestService);
    httpMock=TestBed.get(HttpTestingController);
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should be inherit from ServiceBase class', inject([TestService], (service: TestService) => {
    expect(TestService.prototype instanceof ServiceBase).toBeTruthy();
  }));

  it('should run() to API_URL', inject([TestService], (service: TestService, done) => {
    service.run(new Test({identifier:'sometest'}))
      .subscribe(res => {
      expect(res).toBeTruthy;

      done;
    });

    let mockRequest=httpMock.expectOne(environment.API_URL);
    mockRequest.flush({some:'request data'});

    httpMock.verify;
  }));

  it('should run() and return {identifier: "someTestname", result: {status: Pass/Fail, message?:"", data?:{}, error?:""}}',
    inject([TestService], (service: TestService, done) => {
      service.run(new Test({identifier:'some test'}))
        .subscribe(res => {
        var res_keys=Object.keys(res);
        expect(res_keys).toContain('identifier');
        expect(res_keys).toContain('result');
        var res_result_keys=Object.keys(res.result);
        expect(res_result_keys).toContain('status');

        done;
      });

      let mockRequest=httpMock.expectOne(environment.API_URL);
      mockRequest.flush({identifier:'request data',result: {status: 'Pass'}});

      httpMock.verify;
  }
  ));  
});
