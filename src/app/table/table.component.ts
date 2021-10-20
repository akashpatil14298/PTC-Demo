import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() Name:string='Time Entries';

  data:any=[
    {user:"Mr. A",summary:"Admin",id:"123",day:["8h","0h","8h","-","-","-","-"]},
    {user:"Mr. B",summary:"User",id:"214",day:["8h","6h","12h","-","-","-","-"]},
    {user:"Mr. C",summary:"Admin",id:"145",day:["8h","8h","8h","-","-","-","-"]},
  ]

  

  rangeDates?:Date[];
  checked:boolean=false;
  constructor() {
    this.rangeDates?.push(new Date());
    this.rangeDates?.push(new Date());
   }
  ngOnInit(): void {
  }
}
