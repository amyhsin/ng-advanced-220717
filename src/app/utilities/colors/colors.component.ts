import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  type: string | null = '';
  name: string | null = '';
  data: any = {};

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.type = this.route.snapshot.paramMap.get('type');

    this.route.paramMap.subscribe(param => {
      this.type = param.get('type');
    });

    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name');
    });

    this.route.data.subscribe(data => {
      this.data = data;
    });

  }

  inc(num: number) {
    this.router.navigate(['../', (+(this.type||0)) + num], {
      queryParamsHandling: 'preserve',
      relativeTo: this.route
    })
  }

}