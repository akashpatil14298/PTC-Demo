import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styles: [`:host ::ng-deep .p-password input {
    width: 15rem
}`]
})
export class PasswordComponent implements OnInit {

  value1:string="";
  value2:string="";


  city:string="";
  selectedCountry: any = null;

  countries:any[]=[
      {name: 'Africa', key: 'A'}, {name: 'England', key: 'E'}, {name: 'Peru', key: 'P'}, {name: 'Russia', key: 'R'}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
