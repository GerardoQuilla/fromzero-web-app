import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProjectsApiService} from "../../../../main-page-enterprise/components/home/services/projects-api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-apply-confirmation',
  templateUrl: './apply-confirmation.component.html',
  styleUrl: './apply-confirmation.component.css'
})
export class ApplyConfirmationComponent {
  private _snackBar = inject(MatSnackBar);

  constructor(public dialogRef: MatDialogRef<ApplyConfirmationComponent>,
              private projectsService:ProjectsApiService,
              @Inject(MAT_DIALOG_DATA)public data:{
                developerUserId:number,
                projectId:number
              }) {}

  apply(){
    /*this.projectsService.addCandidateToProject(this.data.projectId,this.data.developerUserId).subscribe(response=>{
      console.log(response)
      this.dialogRef.close();
    })*/
    this.projectsService.addCandidateToProject(this.data.projectId,this.data.developerUserId).subscribe({
      next: result => {
        this._snackBar.open("Postulación enviada con éxito","Close",{
          duration: 3000,
        })
        this.dialogRef.close();
      },
      error: err => {
        this._snackBar.open("Error","Close",{
          duration: 2000,
        })
      }
    });
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
