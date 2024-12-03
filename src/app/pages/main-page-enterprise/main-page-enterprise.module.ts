import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MainPageComponent } from "./pages/main-page/main-page.component";
import {HomeProfileComponent} from "./components/home/components/home-profile/home-profile.component";
import {HomeProjectsComponent} from "./components/home/components/home-projects/home-projects.component";
import {
  CandidatesProjectDialogComponent
} from "./components/home/components/candidates-project-dialog/candidates-project-dialog.component";
import {
  EditProfileDialogComponent
} from "./components/home/components/edit-profile-dialog/edit-profile-dialog.component";
import {AppContentRoutingModule} from "./main-page-enterprise-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {
  FormCreateProjectComponent
} from "./components/projects/components/form-create-project/form-create-project.component";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {
  ConfirmationDialogComponent
} from "./components/projects/components/confirmation-dialog/confirmation-dialog.component";
import {DeliverablesComponent} from "./components/deliverables/components/deliverables/deliverables.component";
import {
  DialogAddDeliverableComponent
} from "./components/deliverables/components/dialog/dialog-add-deliverable.component";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {HomePageComponent} from "./components/home/components/home-page/home-page.component";
import {DeliverableComponent} from "./components/review-deliverable/components/deliverable/deliverable.component";
import {
  DialogAcceptDeliverableComponent
} from "./components/review-deliverable/components/dialog-accept-deliverable/dialog-accept-deliverable.component";
import {
  LookingfordevelopComponent
} from "./components/looking-for-developer/components/lookingfordevelop/lookingfordevelop.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import { SidenavEnterpriseComponent } from './components/sidenav-enterprise/sidenav-enterprise.component';
import {HttpClientModule} from "@angular/common/http";
import { DeveloperProfileCardComponent } from './components/developer-profile/components/developer-profile-card/developer-profile-card.component';
import { DeveloperRepositoryCardComponent } from './components/developer-profile/components/developer-repository-card/developer-repository-card.component';
import { DeveloperProfilePageComponent } from './components/developer-profile/components/developer-profile-page/developer-profile-page.component';
import {SharedModule} from "../../shared/shared.module";
import { PayDeveloperComponent } from './components/deliverables/components/pay-developer/pay-developer.component';
import { PaymentDetailsComponent } from './components/deliverables/components/payment-details/payment-details.component';

@NgModule({
  declarations: [
    HomeProfileComponent,
    HomeProjectsComponent,
    MainPageComponent,
    EditProfileDialogComponent,
    CandidatesProjectDialogComponent,
    FormCreateProjectComponent,
    ConfirmationDialogComponent,
    DeliverablesComponent,
    DialogAddDeliverableComponent,
    HomePageComponent,
    DeliverableComponent,
    DialogAcceptDeliverableComponent,
    LookingfordevelopComponent,
    SidenavEnterpriseComponent,
    DeveloperProfileCardComponent,
    DeveloperRepositoryCardComponent,
    DeveloperProfilePageComponent,
    PayDeveloperComponent,
    PaymentDetailsComponent,
  ],
    imports: [
        CommonModule,
        AppContentRoutingModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatProgressBarModule,
        MatSelect,
        MatOption,
        MatCheckbox,
        ReactiveFormsModule,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        MatPaginatorModule,
        HttpClientModule,
        SharedModule,
        NgOptimizedImage
    ]
})
export class MainPageEnterpriseModule { }
