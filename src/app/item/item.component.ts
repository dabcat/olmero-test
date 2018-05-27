import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('data') data: string = '';

  constructor() {}

  ngOnInit() {
    if(this.data.search(/(<p[^>]+?>|<p>|<\/p>)/ig) > -1) {
      let re = new RegExp(/(<p[^>]+?>|<p>|<\/p>)|([.,\/#!$%\^&\*;:{}=\-_`~()?])/ig);
      let newItem = this.data
        .replace(re, '')
        .trim()
        .split(' ')
        .sort((a,b) => a.localeCompare(b))
        .join(' ')

      this.data = newItem;
    }
  }

}
