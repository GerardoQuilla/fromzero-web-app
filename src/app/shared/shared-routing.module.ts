import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
import {ChatPageComponent} from "./pages/chat-page/chat-page.component";

const routes: Routes = [
  {
    path:'highlight-projects',
    component: ProjectListComponent
  },
  {
    path:'chats',
    component: ChatPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
