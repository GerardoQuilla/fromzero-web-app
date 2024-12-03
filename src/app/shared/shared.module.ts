import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
import {MatIconModule} from "@angular/material/icon";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
/*import { MessageComponent } from './components/message/message.component';
import { InboxComponent } from './pages/inbox/components/inbox/inbox.component';*/
import {MatDialogModule} from "@angular/material/dialog";
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ChatPageComponent,
    ChatComponent,
    MessageComponent,
    /*MessageComponent,
    InboxComponent*/
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatTable,
    MatPaginator,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    FormsModule,
    MatDialogModule
  ],
  exports:[
    ProjectListComponent
  ]
})
export class SharedModule { }
