import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  // { path: 'users/:movieName', component: MovieDetailsComponent },
  // { path: 'create', component: MovieFormPagesComponent },
];
