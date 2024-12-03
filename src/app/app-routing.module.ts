import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authDeveloperGuard} from "./core/guards/auth-developer.guard";
import {authCompanyGuard} from "./core/guards/auth-company.guard";
import {authSharedGuard} from "./core/guards/auth-shared.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'app',
    loadChildren: () => import("./pages/main-page-enterprise/main-page-enterprise.module")
      .then(m => m.MainPageEnterpriseModule),
    canActivate: [authCompanyGuard]
  },
  {
    path: 'app-developer',
    loadChildren: () => import("./pages/main-page-developer/main-page-developer.module")
      .then(m => m.MainPageDeveloperModule),
    canActivate: [authDeveloperGuard]
  },
  {
    path: 'shared',
    loadChildren: () => import("./shared/shared.module")
      .then(m => m.SharedModule),
    canActivate: [authSharedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
