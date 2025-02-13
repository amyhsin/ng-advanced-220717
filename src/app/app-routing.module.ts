import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', 
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'dashboard', component: DashboardComponent, title: 'SB Admin 2 - Dashboard' },
      { path: 'page1', component: Page1Component},
      { path: 'page2', component: Page2Component},
      // {
      //   path: 'utilities', 
      //   children: [
      //     { path: 'colors/:type', component: ColorsComponent, data: {key: 'something'} }
      //   ]
      // },
      {
        path: 'utilities', 
        loadChildren: () => import('./utilities/utilities.module').then(m => m.UtilitiesModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
