import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';
import { ModifyPipe } from './pipe/modify.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NgxDataTableComponent,
    ModifyPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxDataTableComponent,
    ModifyPipe,
    FilterPipe
  ] // Export important!!!
})
export class DataTableModule { }
