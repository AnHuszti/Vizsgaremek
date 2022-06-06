import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

export interface INgxTableColumn {
  title: string, //header
  key: string    //datakey
}

@Component({
  selector: 'ngx-data-table',
  templateUrl: './ngx-data-table.component.html',
  styleUrls: ['./ngx-data-table.component.scss']
})
export class NgxDataTableComponent<T extends {[x: string]: any}> implements OnInit {

  // Rows
  @Input() list: T[] = []
  // Columns
  @Input() columns: INgxTableColumn[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
