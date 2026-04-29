import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: About }
];