import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  origBodyClassName = document.body.className;
  data = {
    email: 'abc@email.com',
    password: '123456',
    isRememberMe: true
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    document.body.className = 'bg-gradient-primary';
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    document.body.className = this.origBodyClassName;
  }

  doLogin(form: NgForm) {
    if (form.valid) {
      // localStorage.setItem('apikey', 'TEST');
      const url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigateByUrl(url);
    }
  }

}
