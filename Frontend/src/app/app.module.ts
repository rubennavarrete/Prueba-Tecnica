import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardComponent } from './component/heard/heard.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutSimpleComponent } from './layout/layout-simple/layout-simple.component';
import { MainComponent } from './component/main/main.component';
import { InformationComponent } from './component/information/information.component';
import {  HttpClientModule } from '@angular/common/http';
import { CalendarioComponent } from './component/calendario/calendario.component';
import { PartesuperiorComponent } from './component/partesuperior/partesuperior.component';

@NgModule({
  declarations: [
    AppComponent,
    HeardComponent,
    BodyComponent,
    FooterComponent,
    LayoutSimpleComponent,
    MainComponent,
    InformationComponent,
    CalendarioComponent,
    PartesuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
