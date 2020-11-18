import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ObservationsComponent } from './observations/observations.component';
import { PortraitsComponent } from './portraits/portraits.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'portraits', component:  PortraitsComponent},
  { path: 'observations', component:  ObservationsComponent},
  { path: 'studio', component:  StudioComponent},
  { path: 'about', component:  AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
