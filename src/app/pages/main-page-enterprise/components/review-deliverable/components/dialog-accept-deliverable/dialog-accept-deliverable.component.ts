import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeliverablesApiService} from "../../../deliverables/services/deliverables-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-dialog-accept-deliverable',
  templateUrl: './dialog-accept-deliverable.component.html',
  styleUrl: './dialog-accept-deliverable.component.css'
})
export class DialogAcceptDeliverableComponent {
  private _snackBar = inject(MatSnackBar);

  constructor(public dialogRef:MatDialogRef<DialogAcceptDeliverableComponent>,
              private delvsApi:DeliverablesApiService,
              @Inject(MAT_DIALOG_DATA)public data:{deliverableId:number}) {
  }

  acceptDeliverable(){
    /*this.delvsApi.reviewDeliverable(this.data.deliverableId,true).subscribe((response:any)=>{
      this.dialogRef.close(response.state);
    })*/
    this.delvsApi.reviewDeliverable(this.data.deliverableId,true).subscribe({
      next: result => {
        this._snackBar.open("Entregable revisado","Close",{
          duration: 3000,
        })
        this.dialogRef.close();
      },
      error: err => {
        this._snackBar.open("Error","Close",{
          duration: 2000,
        })
        this.dialogRef.close();
      }
    })
  }

  rejectDeliverable(){
    /*this.delvsApi.reviewDeliverable(this.data.deliverableId,false).subscribe((response:any)=>{
      this.dialogRef.close(response.state);
    })*/
    this.delvsApi.reviewDeliverable(this.data.deliverableId,false).subscribe({
      next: result => {
        this._snackBar.open("Entregable revisado","Close",{
          duration: 3000,
        })
        this.dialogRef.close();
      },
      error: err => {
        this._snackBar.open("Error","Close",{
          duration: 2000,
        })
        this.dialogRef.close();
      }
    })
  }
}
