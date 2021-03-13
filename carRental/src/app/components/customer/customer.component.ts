import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer1 = { customerId: 1, userId: 1, companyName: 'DoganHolding' };
  customer2 = { customerId: 2, userId: 1, companyName: 'Kirpik AŞ' };
  customers = [this.customer1, this.customer2];
  constructor() {}

  ngOnInit(): void {}
}
