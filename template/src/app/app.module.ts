import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { UsersettingsComponent } from './usersettings/usersettings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ContainerComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    TableComponent,
    NotificationComponent,
    SearchComponent,
    UsersettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
