import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./features/authentication/authentication.module').then((m) => m.AuthenticationModule)},
  {path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
  {path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)},
  {path: 'jobs', loadChildren: () => import('./features/jobs/jobs.module').then(m => m.JobsModule)},
  {path: 'hire', loadChildren: () => import('./features/hire/hire.module').then(m => m.HireModule)},
  {path: 'resumes', loadChildren: () => import('./features/resumes/resumes.module').then(m => m.ResumesModule)},
  {path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule)},
  {path: 'service', loadChildren: () => import('./features/services/services.module').then(m => m.ServicesModule)},
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
