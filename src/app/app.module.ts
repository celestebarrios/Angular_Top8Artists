import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BadboysComponent } from './badboys/badboys.component';
import { Top5Component } from './top5/top5.component';
import { FakebioComponent } from './fakebio/fakebio.component';
import { D4lComponent } from './d4l/d4l.component';
import { MinnesotaComponent } from './minnesota/minnesota.component';
import { PinkfloydComponent } from './pinkfloyd/pinkfloyd.component';
import { RingsComponent } from './rings/rings.component';
import { WallflowersComponent } from './wallflowers/wallflowers.component';
import { MarimbaComponent } from './marimba/marimba.component';

@NgModule({
  declarations: [
    AppComponent,
    Top5Component,
    BadboysComponent,
    D4lComponent,
    MinnesotaComponent,
    PinkfloydComponent,
    RingsComponent,
    FakebioComponent,
    WallflowersComponent,
    MarimbaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
