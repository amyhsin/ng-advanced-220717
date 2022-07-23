import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  type: string | null = '';
  name: string | null = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.type = param.get('type');
    })

    this.route.queryParamMap.subscribe(param => {
      this.name = param.get('name')
    })
  }

}
