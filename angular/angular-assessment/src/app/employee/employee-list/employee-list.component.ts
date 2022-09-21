import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  @Input() employeeData: any;

  constructor() {
  }

  ngOnInit(): void {
  }
  
  
}
