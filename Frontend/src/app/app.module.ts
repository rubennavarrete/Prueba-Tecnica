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
import { ButtonComponent } from './component/button/button.component';
import { LayoutModule } from './layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RecargaDirective } from './directives/recarga.directive'

@NgModule({
  declarations: [
    // AppComponent,
    // LayoutSimpleComponent,
    // MainComponent
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
