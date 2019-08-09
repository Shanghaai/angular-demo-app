import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';

import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [

  { path: 'index', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/task', component: TaskComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent
  ],
  imports: [

    RouterModule.forRoot(appRoutes, { enableTracing: true }),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
