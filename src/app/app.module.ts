import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { SoftwareBioComponent } from './software-tech/software-tech.component';
import { IllustrationBioComponent } from './illustration-gallery/illustration-gallery.component';
import { HomeBioComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SoftwareSoftskillsComponent } from './software-softskills/software-softskills.component';
import { SoftwareProjectsComponent } from './software-projects/software-projects.component';
import { IllustrationComicsComponent } from './illustration-comics/illustration-comics.component';
import { IllustrationCommissionsComponent } from './illustration-commissions/illustration-commissions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MenuComponent,
    SoftwareBioComponent,
    IllustrationBioComponent,
    HomeBioComponent,
    ContactComponent,
    SoftwareSoftskillsComponent,
    SoftwareProjectsComponent,
    IllustrationComicsComponent,
    IllustrationCommissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
