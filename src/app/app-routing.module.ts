import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import {InfoComponent } from './info/info.component'
import {UserComponent } from './user/user.component'
import { UserdetailsComponent} from './userdetails/userdetails.component'
import {HomeComponent} from './home/home.component'


const routes: Routes = [
  {
    path: "info",
    component: InfoComponent
  },

  {
    path: "user",
    component: UserComponent
  },

  {
    path: "userdetails",
    component: UserdetailsComponent
  },

  {
    path: "home",
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
