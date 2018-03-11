import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from '../../environments/environment';

import { ServiceBase } from './service-base';

describe('ServiceBase', () => {
  let serviceBase: ServiceBase;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceBase]
    });

    serviceBase=TestBed.get(ServiceBase);
    httpMock=TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ServiceBase], (service: ServiceBase) => {
    expect(service).toBeTruthy();
  }));

  it('should read environment to get API_URL', inject([ServiceBase], (service: ServiceBase) => {
    expect(service.API_URL).toEqual(environment.API_URL);
  }));

  it('should _get() to the API_URL', inject([ServiceBase], (service: ServiceBase, done) => {
    service._get({})
      .subscribe(res => {
    	expect(res).toBeTruthy;

    	done;
  	  });

  let mockRequest=httpMock.expectOne(environment.API_URL);
  mockRequest.flush({some:'request data'});

  httpMock.verify;


  }));


});
