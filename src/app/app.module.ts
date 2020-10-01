import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule} from '@angular/forms';
import {StockModule} from './stock/stock.module';
import { HighLightDirective } from './directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
