import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewblogComponent } from './newblog/newblog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowblogComponent } from './showblog/showblog.component';
import { EditblogComponent } from './editblog/editblog.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"articles/new",component:NewblogComponent},
  {path:"articles/:slug",component:ShowblogComponent},
  {path:"articles/edit/:slug",component:EditblogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
