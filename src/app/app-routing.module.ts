import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareBioComponent } from './software-bio/software-bio.component';
import { IllustrationBioComponent } from './illustration-bio/illustration-bio.component';
import { HomeBioComponent } from './home-bio/home-bio.component';

const routes: Routes = [
  {path: '', component:HomeBioComponent},
  {path: 'software', component:SoftwareBioComponent},
  {path: 'illustration', component:IllustrationBioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
