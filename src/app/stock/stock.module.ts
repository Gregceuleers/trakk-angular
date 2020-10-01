import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockComponent } from './stock.component';



@NgModule({
  declarations: [StockComponent],
  exports: [
    StockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StockModule { }
