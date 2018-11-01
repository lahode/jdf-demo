import { Routes } from '@angular/router';

import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
