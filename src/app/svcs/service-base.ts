import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class ServiceBase {
  production=environment.production;
  API_URL:string=environment.API_URL;
  constructor(private _http?:HttpClient) { }

  public _get = (data:{}):Observable<any> => {
  	return this._http.get(this.API_URL,data);
  }
}
