import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  SearchProjectsComponent
} from "./components/search-projects/components/search-projects/search-projects.component";
import {ApplyToProjectComponent} from "./components/projects/apply-to-project/apply-to-project.component";
import {
  ProjectProfilePageComponent
} from "./components/project-profile/components/project-profile-page/project-profile-page.component";
import {DevDeliverablesComponent} from "./components/dev-deliverables/dev-deliverables.component";
import {SendDeliverableComponent} from "./components/send-deliverable/send-deliverable.component";
import {MainPageDeveloperComponent} from "./pages/main-page-developer/main-page-developer.component";
import {
  HomePageDeveloperComponent
} from "./components/home/components/home-page-developer/home-page-developer.component";
import {authSharedGuard} from "../../core/guards/auth-shared.guard";
import {authDeveloperGuard} from "../../core/guards/auth-developer.guard";

const routes: Routes = [
  {
    path: "main",
    component: MainPageDeveloperComponent,
    canActivate: [authDeveloperGuard],
    children: [
      {
        path: "home",
        component: HomePageDeveloperComponent,
      },
      {
        path: 'search-projects',
        component: SearchProjectsComponent
      },
      {
        path: 'apply-to-project/:id',
        component: ApplyToProjectComponent
      },
      {
        path: 'shared',
        loadChildren: () => import("../../shared/shared.module").then(m => m.SharedModule),
        canActivate: [authSharedGuard]
      },
      {
        path: 'enterprise-profile/:enterpriseId',
        component: ProjectProfilePageComponent
      },
      {
        path: ':projectId/deliverables',
        component: DevDeliverablesComponent
      },
      {
        path: ':projectId/deliverables/:deliverableId',
        component: SendDeliverableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageDeveloperRoutingModule {
}
