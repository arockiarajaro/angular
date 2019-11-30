import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import {Officeaddress1Component} from './officeaddress1/officeaddress1.component';
import {Officeaddress2Component} from './officeaddress2/officeaddress2.component';
import {Officeaddress3Component} from './officeaddress3/officeaddress3.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'services',component:ServicesComponent},
{path:'contact',component:ContactComponent,children:[
  {path:':address/:id/address1',component:Officeaddress1Component},
  {path:'address2',component:Officeaddress2Component},
  {path:'address3',component:Officeaddress3Component}
]},
{path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
