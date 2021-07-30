import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareBioComponent } from './software-tech/software-tech.component';
import { IllustrationBioComponent } from './illustration-gallery/illustration-gallery.component';
import { HomeBioComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SoftwareSoftskillsComponent } from './software-softskills/software-softskills.component';
import { SoftwareProjectsComponent } from './software-projects/software-projects.component';
import { IllustrationComicsComponent } from './illustration-comics/illustration-comics.component';
import { IllustrationCommissionsComponent } from './illustration-commissions/illustration-commissions.component';

const routes: Routes = [
  {path: 'software',
  children: [
  {path: 'tech', component:SoftwareBioComponent},
  {path: 'soft', component:SoftwareSoftskillsComponent},
  {path: 'projects', component:SoftwareProjectsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'home', component:HomeBioComponent}
  ]
},
  {path: 'illustration',
  children: [
    {path: 'gallery', component:IllustrationBioComponent},
    {path: 'comics', component:IllustrationComicsComponent},
    {path: 'commissions', component:IllustrationCommissionsComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'home', component:HomeBioComponent}
    ]
  },
  {path: 'contact', component:ContactComponent},
  {path: '', redirectTo:'landing-page/home', pathMatch: 'full'},
  {path: 'landing-page',
  children: [
    {path: 'home', component:HomeBioComponent},
    {path: 'contact', component:ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
