import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  val1:any;
  val2:any;
  val3?:number;
  val4?:number;
  val5?:number;
  val6?:number;
  rangeValues: number[] = [20,80];

  constructor() { }

  ngOnInit(): void {
  }

}
