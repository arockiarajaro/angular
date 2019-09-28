import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent} from'./home/home.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {ProductComponent} from './product/product.component'

import{EditComponent} from './edit/edit.component';
import {DetailsComponent} from "./details/details.component"

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"product", component:ProductComponent,children:[
    {path:"edit",component:EditComponent},
    {path:":id",component:DetailsComponent}
  ]},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
