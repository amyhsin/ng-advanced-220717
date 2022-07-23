import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  origBodyClassName = document.body.className;

  constructor() { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-warning';
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    document.body.className = this.origBodyClassName;
  }

}
