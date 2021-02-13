import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "result/:name", component: ResultComponent },
  { path: "admin", component: AdminComponent },
  { path: "about", component: AboutComponent },
  { path: "schedule", component: ScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
