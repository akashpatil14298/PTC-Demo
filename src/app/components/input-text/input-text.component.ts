import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  public value1:any;
  public value2:any;
  constructor() { }

  ngOnInit(): void {
  }

}
