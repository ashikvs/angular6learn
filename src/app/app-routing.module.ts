import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../../src/app/components/home/home.component'
import {LandingPageComponent} from '../../src/app/components/landing-page/landing-page.component'


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
 },
  {
    path: 'home',
    component: HomeComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
