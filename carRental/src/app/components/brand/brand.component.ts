import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brand1 = { brandId: 1, brandName: 'BMW' };
  brand2 = { brandId: 2, brandName: 'Audi' };
  brands = [this.brand1, this.brand2];
  constructor() {}

  ngOnInit(): void {}
}
