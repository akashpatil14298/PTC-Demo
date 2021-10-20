import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent implements OnInit {

  public val?:number;
  constructor() { }

  ngOnInit(): void {
  }

}
