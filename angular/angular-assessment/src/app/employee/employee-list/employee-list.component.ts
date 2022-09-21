import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  employee: any[];
  constructor() {
    this.employee = [
      {
        name: '',
        gender: '',
        dob: '',
        salary: 5000
      }

    ]
  }

  ngOnInit(): void {
  }
  
  
}
