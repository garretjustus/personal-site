import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { ObservationsComponent } from './observations/observations.component';
import { StudioComponent } from './studio/studio.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PortraitsComponent,
    ObservationsComponent,
    StudioComponent,
    AboutComponent,
    HeaderComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
