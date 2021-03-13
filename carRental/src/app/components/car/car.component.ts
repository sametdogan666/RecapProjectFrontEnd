import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car1 = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    modelYear: 2018,
    dailyPrice: 200,
    description: 'Otomatik Benzinli',
  };
  car2 = {
    carId: 2,
    brandId: 2,
    colorId: 2,
    modelYear: 2016,
    dailyPrice: 250,
    description: 'Otomatik Dizel',
  };
  car3 = {
    carId: 3,
    brandId: 1,
    colorId: 3,
    modelYear: 2014,
    dailyPrice: 160,
    description: 'Manuel Benzinli',
  };

  cars = [this.car1, this.car2, this.car3];
  constructor() {}

  ngOnInit(): void {}
}
