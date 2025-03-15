import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  token:string|null=null;
  
  constructor(
    private router:ActivatedRoute,
    private routerNavigator: Router,
    private _autService:AuthApiService
  ){}

  form = new FormGroup(
    {
      newPassword: new FormControl('',Validators.required)
    }
  );

  ngOnInit(): void {
    this.router.queryParamMap.subscribe(params=>{
      this.token=params.get("token");
      console.log("Token: "+this.token);
    })
  }

  send(){
    const passwordControl = this.form.get("newPassword");
    if(passwordControl){
      const newPassword = passwordControl.value;
      if(newPassword!==null && newPassword!=="" && this.token!==null){
        this._autService.resetPassword(newPassword,this.token).subscribe({
          next: (response)=>{
            this._snackBar.open(`${response.message}`,"Close",{
              duration: 3000,
            })
            this.routerNavigator.navigate(["/login"]);
          },
          error: (err)=>{
            this._snackBar.open(`${err.error.message}`,"Close",{
              duration: 3000,
            })
          }
        });

      }else{
        this._snackBar.open(`Ingrese una contraseña válida`, "Close", {
          duration: 3000,
        })
      }
    }
  }

}
