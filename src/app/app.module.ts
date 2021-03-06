import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalService } from './global.service'
import { Globals } from './global';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component'
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HomeComponent,
    AdminComponent,
    AboutComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GlobalService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
