import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-table',
  templateUrl: './right-table.component.html',
  styleUrls: ['./right-table.component.css']
})
export class RightTableComponent implements OnInit {

  constructor() { }

  cols:any[]=[];
  data:any=[
    {user:"Mr. A",summary:"Admin",id:"123",day:["8h","0h","8h","-","-","-","-"]},
    {user:"Mr. B",summary:"User",id:"214",day:["8h","6h","12h","-","-","-","-"]},
    {user:"Mr. C",summary:"Admin",id:"145",day:["8h","8h","8h","-","-","-","-"]},
  ]
  ngOnInit(): void {
    this.cols = [
      { field: 'mon', header:'Mon'},
      { field: 'tue', header:'Tue'},
      { field: 'wed', header:'Wed'},
      { field: 'thur', header:'Thur'},
      { field: 'fri', header:'Fri'},
      { field: 'sat', header:'Sat'},
      { field: 'sun', header:'Sun'},
      { field: 'total',header:'Total'}
    ];
  }

}
