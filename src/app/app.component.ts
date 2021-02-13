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
    //Test
    this.router.navigateByUrl('/home');
  }

  poweredBy() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
  }

  copyright() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
  }
}
