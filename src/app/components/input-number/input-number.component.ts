import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.css']
})
export class InputNumberComponent implements OnInit {

  val:any;
  value1:number=12453;
  value2:number=124512;
  value3:number=124500;
  value4:number=1455220;
  constructor() { }

  ngOnInit(): void {
  }

}
