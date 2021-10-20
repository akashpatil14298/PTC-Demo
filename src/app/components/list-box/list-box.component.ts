import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrls: ['./list-box.component.css']
})
export class ListBoxComponent implements OnInit {

  cities: City[]; 
  selectedCity?: City;
  selectedCityname: string="";
  selectedCities:City[]=[];
  constructor() { 
    this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
  }

  ngOnInit(): void {
  }

}
