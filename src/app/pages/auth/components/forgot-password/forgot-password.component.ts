import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  private _snackBar = inject(MatSnackBar);
  constructor(private _authService: AuthApiService) { }
  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required,Validators.email])
    }
  )

  send() {
    const emailControl = this.form.get("email");
    if (emailControl) {
      const email = emailControl.value;
      if (email !== null && email !== "") {

        if(emailControl.hasError("email")){
          this._snackBar.open(`Email no valido`, "Close", {
            duration: 3000,
          })
          return;
        }

        this._authService.forgotPassword(email).subscribe({
          next: (response)=>{
          
            this._snackBar.open(`${response.message}`,"Close",{
              duration: 3000,
            })
          },
          error: (err)=>{
            this._snackBar.open(`${err.error.message}`,"Close",{
              duration: 3000,
            })
          }
        })

      }else {
        this._snackBar.open(`Ingrese su correo electronico`, "Close", {
          duration: 3000,
        })
      }
    }
  }
}
