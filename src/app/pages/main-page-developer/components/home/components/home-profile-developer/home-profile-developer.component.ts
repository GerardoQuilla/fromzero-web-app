import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {Router} from "@angular/router";
import {
  EditProfileDeveloperDialogComponent
} from "../edit-profile-developer-dialog/edit-profile-developer-dialog.component";
import {ListPaymentsDialogComponent} from "../list-payments-dialog/list-payments-dialog.component";

@Component({
  selector: 'app-home-profile-developer',
  templateUrl: './home-profile-developer.component.html',
  styleUrl: './home-profile-developer.component.css'
})
export class HomeProfileDeveloperComponent {
  @Input() perfilUsuario!: IDeveloperProfileTemp;

  constructor(
    private router:Router,
    public dialogRef: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialogRef.open(EditProfileDeveloperDialogComponent, {
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
    this.router.navigate(["/app-developer/main/shared/chats"])
  }

  listPayments(){
    const dialogRef=this.dialogRef.open(ListPaymentsDialogComponent,{
      width: '600px',
      data: this.perfilUsuario.id
    });
  }

}
