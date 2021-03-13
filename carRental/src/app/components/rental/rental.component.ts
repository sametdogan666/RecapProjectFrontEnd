import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rental1 = {
    rentalId: 1,
    carId: 1,
    customerId: 1,
    rentDate: '10.3.2021',
    returnDate: '25.3.2021',
  };
  rental2 = {
    rentalId: 2,
    carId: 2,
    customerId: 2,
    rentDate: '8.3.2021',
    returnDate: '26.3.2021',
  };
  rentals = [this.rental1, this.rental2];
  constructor() {}

  ngOnInit(): void {}
}
