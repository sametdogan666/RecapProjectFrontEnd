import { Component, OnInit } from '@angular/core';
import { CustomerDto } from 'src/app/models/customer/customerDto';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: CustomerDto[] = [];
  currentCustomer: CustomerDto;
  constructor(private customerServise: CustomerService) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.customerServise.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }
  setCurrentCustomer(customer: CustomerDto) {
    this.currentCustomer = customer;
  }
  getCurrentCustomerClass(customer: CustomerDto) {
    if (customer == this.currentCustomer) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
}
