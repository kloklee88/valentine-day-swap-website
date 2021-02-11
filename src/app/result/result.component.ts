import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Globals } from '../global';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result;
  pairs = this.globals.pairs;
  name: string;

  constructor(
    private globals: Globals,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
        }
      );
    this.result = this.pairs.find(x => x.sender === this.name)
  }
}
