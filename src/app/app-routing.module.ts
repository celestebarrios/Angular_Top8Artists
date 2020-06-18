import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';

import { Top5Component } from './top5/top5.component';

import { BadboysComponent } from './badboys/badboys.component';
import { D4lComponent } from './d4l/d4l.component';
import { MinnesotaComponent } from './minnesota/minnesota.component';
import { PinkfloydComponent } from './pinkfloyd/pinkfloyd.component';
import { RingsComponent } from './rings/rings.component';
import { WallflowersComponent } from './wallflowers/wallflowers.component';
import { MarimbaComponent } from './marimba/marimba.component';

import { FakebioComponent } from './fakebio/fakebio.component';


const routes: Routes = [
  {
    path: 'top5', component: Top5Component
  },
  {
    path: 'badboys', component: BadboysComponent
  },
  {
    path: 'd4l', component: D4lComponent
  },
  {
    path: 'minnesota', component: MinnesotaComponent
  },
  {
    path: 'pinkfloyd', component: PinkfloydComponent
  },
  {
    path: 'rings', component: RingsComponent
  },
  {
    path: 'wallflowers', component: WallflowersComponent
  },
  {
    path: 'marimba', component: MarimbaComponent
  },
  {
    path: 'fakebio', component: FakebioComponent
  }
];
MarimbaComponent
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
