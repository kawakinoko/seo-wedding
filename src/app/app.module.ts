import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { TopMainComponent } from './top-main/top-main.component';
import { AppRoutingModule } from './app-routing.module';
import { ConveyHeartInfoComponent } from './convey-heart-info/convey-heart-info.component';
import { AppBootstrapModule } from './app-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BulletinComponent,
    TopMainComponent,
    ConveyHeartInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppBootstrapModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    { provide: COMPOSITION_BUFFER_MODE, useValue: false }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
