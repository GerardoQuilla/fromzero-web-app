import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDeveloperRoutingModule } from './main-page-developer-routing.module';
import { SidenavDeveloperComponent } from './components/sidenav-developer/sidenav-developer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSmImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import { SearchProjectsComponent } from './components/search-projects/components/search-projects/search-projects.component';
import { HomeProfileDeveloperComponent } from './components/home/components/home-profile-developer/home-profile-developer.component';
import {MatIcon} from "@angular/material/icon";
import { EditProfileDeveloperDialogComponent } from './components/home/components/edit-profile-developer-dialog/edit-profile-developer-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { HomeProjectsDeveloperComponent } from './components/home/components/home-projects-developer/home-projects-developer.component';
import {MatProgressBar} from "@angular/material/progress-bar";
import { ApplyToProjectComponent } from './components/projects/apply-to-project/apply-to-project.component';
import { ApplyConfirmationComponent } from './components/projects/apply-confirmation/apply-confirmation.component';
import {SharedModule} from "../../shared/shared.module";
import { ProjectProfileCardComponent } from './components/project-profile/components/project-profile-card/project-profile-card.component';
import { ProjectProfilePageComponent } from './components/project-profile/components/project-profile-page/project-profile-page.component';
//import { ProjectRepositoryCardComponent } from './components/project-profile/components/project-repository-card/project-repository-card.component';
import { DevDeliverablesComponent } from './components/dev-deliverables/dev-deliverables.component';
import { SendDeliverableComponent } from './components/send-deliverable/send-deliverable.component';
import { MainPageDeveloperComponent } from './pages/main-page-developer/main-page-developer.component';
import { HomePageDeveloperComponent } from './components/home/components/home-page-developer/home-page-developer.component';
import {MatDivider} from "@angular/material/divider";
import { ListPaymentsDialogComponent } from './components/home/components/list-payments-dialog/list-payments-dialog.component';

@NgModule({
  declarations: [
    SidenavDeveloperComponent,
    SearchProjectsComponent,
    HomeProfileDeveloperComponent,
    EditProfileDeveloperDialogComponent,
    HomeProjectsDeveloperComponent,
    ApplyToProjectComponent,
    ApplyConfirmationComponent,
    ProjectProfileCardComponent,
    ProjectProfilePageComponent,
    //ProjectRepositoryCardComponent,
    DevDeliverablesComponent,
    SendDeliverableComponent,
    MainPageDeveloperComponent,
    HomePageDeveloperComponent,
    ListPaymentsDialogComponent,
  ],
  imports: [
    CommonModule,
    MainPageDeveloperRoutingModule,
    FormsModule,
    MatAnchor,
    MatCard,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatCardContent,
    MatCardHeader,
    MatCardSmImage,
    MatCardTitle,
    MatCardImage,
    MatIcon,
    MatButton,
    MatLabel,
    MatDialogModule,
    MatProgressBar,
    SharedModule,
    MatCardSubtitle,
    MatIconButton,
    MatDivider,
  ]
})
export class MainPageDeveloperModule { }
