import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.css']
})
export class SelectButtonComponent implements OnInit {

  stateOptions:any[];
   paymentOptions: any[];
  value1:string="Off";
  value2?:number;

  checked:boolean=true;

  constructor() { 
    this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
    this.paymentOptions = [
            {name: 'Option 1', value: 1},
            {name: 'Option 2', value: 2},
            {name: 'Option 3', value: 3}
        ];
  }

  ngOnInit(): void {
  }

}
