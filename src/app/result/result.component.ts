import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Globals } from '../global';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  result;
  pairs: any;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getAll().subscribe(players => {
      console.log("HERE HELP");
      console.log(players);
      this.pairs = players[0];
      console.log(this.pairs);
      this.route.params
        .subscribe(
          (params: Params) => {
            this.name = params['name'];
          }
        );
      this.result = this.pairs.find(x => x.sender === this.name)
    });
  }
}
