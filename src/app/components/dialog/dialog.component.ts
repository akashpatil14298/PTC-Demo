import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [`:host ::ng-deep .p-button {
    margin: 0 .5rem 0 0;
    min-width: 10rem;
}
p {
  margin: 10;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

:host ::ng-deep .p-dialog .p-button {
  min-width: 6rem;
}`]
})
export class DialogComponent implements OnInit {

  display: boolean = false;

  showBasicDialog() {
    this.display = true;
}
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}
