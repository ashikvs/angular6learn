import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MyService} from '../service/myservice.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { Custompipe } from './custom-pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingPageComponent,
    Custompipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
