import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, RequestOptionsArgs, Response, Headers } from '@angular/http';

import * as constants from './constants';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class DfRequest {
	constructor(private http: Http) {}

	_request (url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		let request:any;

		if (typeof url === 'string') {
			options = options || { headers: new Headers() };
		} else {
			let req:Request = <Request>url;
			req.headers = req.headers || new Headers();
			req.headers.set('X-DreamFactory-API-Key', constants.DREAMFACTORY_API_KEY);

			request = this.http.request(req);
		}

		return request;
	}
}