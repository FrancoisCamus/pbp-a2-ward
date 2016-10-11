import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Rx';

import { CustomerService } from './customer.service';

@Component({
  moduleId: module.id,
  selector: 'app-customers',
  templateUrl: 'customers.component.html',
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  // customers: Observable<any[]>;
  customers: any[];

  constructor(private _customerService: CustomerService) {  }

  ngOnInit() {
    // Rx observable version with subscribe function to a customer array
    this._customerService.getCustomers_RxObservable()
      .subscribe(
        // it worked
        (customers) => this.customers = customers,
        // error
        (err) => { console.log(err); }
      );

    // Straight up promise to array
    // this._customerService.getCustomers()
    //   .then((customers) => this.customers = customers)
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //   });

    // Promise<any[]>
    // this.customers = this._customerService.getCustomers()
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //   });

    // Rx observable version
    // this.customers = this._customerService.getCustomers_RxObservable()
    //   .catch((err) => {
    //     console.log(err); // dont do this, show the user a nice message
    //     return Observable.of([]);
    //     // now we eat it, but only if the
    //     // message has been communicated to the user
    //   });
    }
}
