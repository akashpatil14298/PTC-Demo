import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  public checked:boolean=false;

  value1:any;

  public selectedCities:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
