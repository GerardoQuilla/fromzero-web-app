import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-add-deliverable',
  templateUrl: './dialog-add-deliverable.component.html',
  styleUrl: './dialog-add-deliverable.component.css'
})
export class DialogAddDeliverableComponent {
  constructor(public dialogRef:MatDialogRef<DialogAddDeliverableComponent>,
              @Inject(MAT_DIALOG_DATA)public data:any) {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
