import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

// here is a barrel, in future we should be able to just use ./customer by convention
import { CustomerComponent, CustomersComponent, CustomerService } from './customer/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  providers: [ CustomerService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
