import { Routes } from '@angular/router';
import { About } from './domains/info/pages/about/about'
import { List } from './domains/pages/list/list'

export const routes: Routes = [
  { path: '', component: About },
  { path: 'list', component: List }
];