import {Component, inject, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDeveloperProfileUpdate} from "../../models/developer-profile-update.model";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-profile-developer-dialog',
  templateUrl: './edit-profile-developer-dialog.component.html',
  styleUrl: './edit-profile-developer-dialog.component.css'
})
export class EditProfileDeveloperDialogComponent {
  private _snackBar = inject(MatSnackBar);
  constructor(
    public dialogRef: MatDialogRef<EditProfileDeveloperDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDeveloperProfileTemp,
    private _profileService: ProfileService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    let idDeveloper: number = Number(localStorage.getItem('id'));
    let originalData = {...this.data};
    this.data.id = idDeveloper;

    let updateData: IDeveloperProfileUpdate = {
      id: this.data.id,
      description: this.data.description,
      country: this.data.country,
      phone: this.data.phone,
      specialties: this.data.specialties,
      profileImgUrl: this.data.profileImgUrl
    };

    this._profileService.updateDeveloperProfile(idDeveloper, updateData).subscribe({
      next: (response) => {
        //console.log(response);
        this._snackBar.open("Perfil actualizado","Close",{
          duration: 3000,
        })
        this.dialogRef.close();
      }, error: () => {
        this._snackBar.open("Error","Close",{
          duration: 2000,
        })
        this.data = originalData;
      }
    })
  }
}
