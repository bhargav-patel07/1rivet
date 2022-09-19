import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customer: any[];
  constructor(private router:Router) {
    this.customer = [
      {
        id: 1,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      },
      {
        id: 2,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      },
      {
        id: 3,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      },
      {
        id: 4,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      },
      {
        id: 5,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      },
      {
        id: 6,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      },
      {
        id: 7,
        Firstname: 'bhargav',
        Lastname: 'patel',
        password: 12345
      }
    ]
  }


  ngOnInit(): void {
  }
}
