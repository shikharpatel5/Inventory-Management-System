import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeListComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    
    RouterModule.forRoot([
    {
    path: '',
    component: HomepageComponent
    },
    {
    path: 'create',
    component: CreateComponent
    },
    {
    path: 'movie/:foodid',
    component: DetailsPageComponent
    },
    {
    path: 'about',
    component: AboutComponent
    }
    
    ])
    
  ],
  providers: [{provide:APP_BASE_HREF, useValue: '/' }],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }

import {Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';