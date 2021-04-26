import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddSourceComponent } from './add-source/add-source.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TransformComponent } from './transform/transform.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TargetComponent } from './target/target.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddSourceComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    TransformComponent,
    HighchartsComponent,
    TargetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
