import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

// operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

export const HEADER = {headers: new HttpHeaders({'Content-Type': 'text'})};

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  loadFile(): Observable<any> {
    return this.http.get('assets/lorem.html', {responseType: 'text'})
      .mergeMap(res => res.split(/\n/))
      .filter(res => res.length > 0)
  }

}
