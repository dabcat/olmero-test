import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  data$: Observable<any>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.data$ = this.api.loadFile();
  }
}
