import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';
import {ICompanyProfile} from "../../../../../../core/models/icompany-profile";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrl: './home-profile.component.css'
})
export class HomeProfileComponent {
  @Input() perfilUsuario!:ICompanyProfile

  constructor(private router:Router,public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '600px',
      data: this.perfilUsuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.perfilUsuario = result;
        console.log('The dialog was closed', result);
      }
    });
  }

  goToInbox(){
    this.router.navigate(["/app/main/shared/chats"])
  }

}
