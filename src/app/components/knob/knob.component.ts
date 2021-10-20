import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrls: ['./knob.component.css']
})
export class KnobComponent implements OnInit {

  value:number=20;
  constructor() { }

  ngOnInit(): void {
  }

}
