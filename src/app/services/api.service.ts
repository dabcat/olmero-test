import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

// operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  loadFile(): Observable<any> {
    return this.http.get('assets/lorem.html', {responseType: 'text'})
      .map(res => res.split(/\n/))
      .map(res => res.filter(item => item.length > 0))
  }

}
