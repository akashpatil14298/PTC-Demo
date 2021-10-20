import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css'],
  providers:[MessageService]
})
export class OrgChartComponent implements OnInit {
   data1?: TreeNode[];

    data2?: TreeNode[];

    selectedNode?: TreeNode;

  constructor(private messageService: MessageService) { }

  // ngOnInit(): void {
  //   this.data1 = [{
  //           label: 'CEO',
  //           type: 'person',
  //           styleClass: 'p-person',
  //           expanded: true,
  //           data: {name:'Walter White', 'avatar': 'walter.jpg'},
  //           children: [
  //               {
  //                   label: 'CFO',
  //                   type: 'person',
  //                   styleClass: 'p-person',
  //                   expanded: true,
  //                   data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
  //                   children:[{
  //                       label: 'Tax',
  //                       styleClass: 'department-cfo'
  //                   },
  //                   {
  //                       label: 'Legal',
  //                       styleClass: 'department-cfo'
  //                   }],
  //               },
  //               {
  //                   label: 'COO',
  //                   type: 'person',
  //                   styleClass: 'p-person',
  //                   expanded: true,
  //                   data: {name:'Mike E.', 'avatar': 'mike.jpg'},
  //                   children:[{
  //                       label: 'Operations',
  //                       styleClass: 'department-coo'
  //                   }]
  //               },
  //               {
  //                   label: 'CTO',
  //                   type: 'person',
  //                   styleClass: 'p-person',
  //                   expanded: true,
  //                   data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
  //                   children:[{
  //                       label: 'Development',
  //                       styleClass: 'department-cto',
  //                       expanded: true,
  //                       children:[{
  //                           label: 'Analysis',
  //                           styleClass: 'department-cto'
  //                       },
  //                       {
  //                           label: 'Front End',
  //                           styleClass: 'department-cto'
  //                       },
  //                       {
  //                           label: 'Back End',
  //                           styleClass: 'department-cto'
  //                       }]
  //                   },
  //                   {
  //                       label: 'QA',
  //                       styleClass: 'department-cto'
  //                   },
  //                   {
  //                       label: 'R&D',
  //                       styleClass: 'department-cto'
  //                   }]
  //               }
  //           ]
  //       }];
  // }

  // onNodeSelect(event:any) {
  //   this.messageService.add({
  //     severity: 'success',
  //     summary: 'Node Selected',
  //     detail: event.node.label
  //   });
  // }

   public events1: any[]=[];
    
    public events2: any[]=[];
    
    ngOnInit() {
        this.events1 = [
            {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
            {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
            {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
            {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
        ];

        this.events2 = [
            "2020", "2021", "2022", "2023"
        ];
    }

}
