import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  initialize() {
    this.globalService.initializeData();
  }

}
