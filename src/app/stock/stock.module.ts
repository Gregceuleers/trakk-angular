import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockComponent} from './stock.component';
import {HighLightDirective} from '../directives/high-light.directive';

@NgModule({
  declarations: [
    StockComponent,
    HighLightDirective
  ],
  exports: [
    StockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StockModule { }
