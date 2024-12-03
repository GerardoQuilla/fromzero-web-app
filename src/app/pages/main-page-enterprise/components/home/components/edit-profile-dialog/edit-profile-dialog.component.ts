import {Component, inject, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {IEnterpriseProfileUpdate} from "../../models/enterprise-profile-update.model";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";
import {ICompanyProfile} from "../../../../../../core/models/icompany-profile";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-profile-dialog',
  templateUrl: './edit-profile-dialog.component.html',
  styleUrl: './edit-profile-dialog.component.css'
})
export class EditProfileDialogComponent {
  private _snackBar = inject(MatSnackBar);
  constructor(
    public dialogRef: MatDialogRef<EditProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICompanyProfile,
    private _profileService:ProfileService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateProfile(): void {
    let idEnterprise: number = Number(localStorage.getItem('id'))
    let originalData = {...this.data};
    this.data.id = idEnterprise;

    let updateData: IEnterpriseProfileUpdate = {
      id: this.data.id,
      description: this.data.description,
      country: this.data.country,
      ruc: this.data.ruc,
      phone: this.data.phone,
      website: this.data.website,
      profileImgUrl: this.data.profileImgUrl,
      sector: this.data.sector
    };

    this._profileService.updateEnterpriseProfile(idEnterprise, updateData).subscribe({
      next:(response)=>{
        //console.log(response);
        this._snackBar.open("Perfil actualizado","Close",{
          duration: 3000,
        })
        this.dialogRef.close();
      },error:()=>{
        this._snackBar.open("Error","Close",{
          duration: 2000,
        })
        this.data = originalData;
      }
    })
  }
}
