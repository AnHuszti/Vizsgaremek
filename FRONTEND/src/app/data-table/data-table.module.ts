import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxDataTableComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxDataTableComponent, FilterPipe
  ] // Export important!!!
})
export class DataTableModule { }
