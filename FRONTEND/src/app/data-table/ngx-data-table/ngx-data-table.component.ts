import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
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

  @Output() onEdit: EventEmitter<T> = new EventEmitter()

  pageSize: number = 20

  startSlice: number = 0 
  
  endSlice: number = 20

  page: number = 1

  //entity: string = 

  get pageList(): number[] {
    const pageSize = Math.ceil(this.list.length / this.pageSize)
    return new Array(pageSize).fill(0).map((item, index) => index + 1)
  } 

  constructor() { }

  ngOnInit(): void {
  }

  jumpToPage(pageNum: number): void {
    this.page = pageNum
    this.startSlice = this.pageSize * (pageNum - 1)
    this.endSlice = this.startSlice + this.pageSize
  }

  raiseEdit(entity: T): void {
    this.onEdit.emit(entity)
  }

}
