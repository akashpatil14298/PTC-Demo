import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-table',
  templateUrl: './left-table.component.html',
  styleUrls: ['./left-table.component.css']
})
export class LeftTableComponent implements OnInit {

  constructor() { }
  data:any=[
    {user:"Jim Morrison(admin)",summary:"Admin",id:"123",day:["8h","0h","8h","-","-","-","-"]},
    {user:"James Halpert(user)",summary:"User",id:"214",day:["8h","6h","12h","-","-","-","-"]},
    {user:"Micheal Scott(admin)",summary:"Admin",id:"145",day:["8h","8h","8h","-","-","-","-"]},
  ]
  ngOnInit(): void {
  }

}
