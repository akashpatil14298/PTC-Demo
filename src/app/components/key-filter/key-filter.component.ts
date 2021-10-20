import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-filter',
  templateUrl: './key-filter.component.html',
  styleUrls: ['./key-filter.component.css']
})
export class KeyFilterComponent implements OnInit {

blockSpecial: RegExp = /^[^<>*!]+$/ 
    
    blockSpace: RegExp = /[^\s]/;
  constructor() { }

  ngOnInit(): void {
  }

}
