import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { GlobalService } from './global.service'
import { Globals } from './global'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigateByUrl('/home');
  }
}
