import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MenuItem,SelectItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checked=false;
  title = 'ngPrime';
  display:boolean=false;
  value1:string="";
  date1?:Date;
  rangeDates=[];
  Options=[{name:"Option1",id:1},{name:"Option2",id:2}];
  selectedOption?:string;
  items: MenuItem[]=[];
  items1: MenuItem[]=[];
  items2:MenuItem[]=[];

  data:any=[
    {user:"Jim Morrison(admin)",summary:"Admin",id:"123",day:["8h","0h","8h","-","-","-","-"]},
    {user:"James Halpert(user)",summary:"User",id:"214",day:["8h","6h","12h","-","-","-","-"]},
    {user:"Micheal Scott(admin)",summary:"Admin",id:"145",day:["8h","8h","8h","-","-","-","-"]},
  ]

  public mystyles={
    fontSize:'14px'
  }
  
  
  Branches='here'

  breadcrumb = {
    border:'none'
  }


  tabheaders=['Time Entries','Relationships','Attachments','Advanced','Branches'];
  
  cols:any[]=[];
  products:any[]=[];
  sum=0;
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit() {

    this.cols = [
      { field: 'user', header: 'User' },
      { field: 'summary', header: 'Summary' },
      { field: 'id', header: 'Id' },
      { field: 'mon', header:'Mon'},
      { field: 'tue', header:'Tue'},
      { field: 'wed', header:'Wed'},
      { field: 'thur', header:'Thur'},
      { field: 'fri', header:'Fri'},
      { field: 'sat', header:'Sat'},
      { field: 'sun', header:'Sun'},
      { field: 'total',header:'Total'}
    ];  

    this.products=[
      {user:"Jim Morrison(admin)",summary:"Admin",id:"123",day:["8h","0h","8h","-","-","-","-","-"]},
    {user:"James Halpert(user)",summary:"User",id:"214",day:["8h","6h","12h","-","-","-","-","-"]},
    {user:"Micheal Scott(admin)",summary:"Admin",id:"145",day:["8h","8h","8h","-","-","-","-","-"]},
      ]
    this.primengConfig.ripple = true;

    this.items = [
      {label: 'PTC'},
      {label: 'Projects'},
      {label: 'ILM'}
  ];

  this.items1 = [
    {
        label: 'File',
        items: [{
                label: 'New', 
                icon: 'pi pi-fw pi-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
            {label: 'Open'},
            {label: 'Quit'}
        ]
    }
  ]

  this.items2=[
    {
      label: 'More',
      items:[{
              label:'Option1'
            },
            {
              label:'Option2'
            }
            ]
    }
  ]

  }


  acceptValue(checked:boolean){
    this.checked=checked;
  }


  getVal(S:string ){
    return parseInt(S.replace('h',''));
  }
}
