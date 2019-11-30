import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Officeaddress1Component } from './officeaddress1/officeaddress1.component';
import { Officeaddress2Component } from './officeaddress2/officeaddress2.component';
import { Officeaddress3Component } from './officeaddress3/officeaddress3.component';
import { EmailPipe } from './email.pipe';
import {UsersService} from './services/users.service';
import { ChildtodoComponent } from './childtodo/childtodo.component';
import {MessageService} from './message.service';
//import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HeaderComponent,
    PagenotfoundComponent,
    Officeaddress1Component,
    Officeaddress2Component,
    Officeaddress3Component,
    EmailPipe,
    ChildtodoComponent
   // HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
