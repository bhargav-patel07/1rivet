import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

public loginForm : FormGroup;

  constructor() {

    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z]+$')]),
      last: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.minLength(5)])
    })
  }

  ngOnInit(): void {
  }

  get fun(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onLogin(){
    console.log(this.loginForm);
    
  }
}
