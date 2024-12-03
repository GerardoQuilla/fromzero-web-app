import {Component} from '@angular/core';
import {AuthApiService} from "../../services/auth-api.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  accountCreated = 0;

  registerForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    accountType: new FormControl('', Validators.required),
    companyName: new FormControl(''),
    developerName: new FormControl(''),
    developerLastName: new FormControl(''),
  })

  constructor(private authService: AuthApiService, private router: Router) {
  }

  register() {
    const emailControl = this.registerForm.get('email');
    const enterpriseNameControl = this.registerForm.get('companyName');
    const developerNameControl = this.registerForm.get('developerName');
    const developerLastNameControl = this.registerForm.get('developerLastName');
    const passwordControl = this.registerForm.get('password');
    const accountTypeControl = this.registerForm.get('accountType')

    if (accountTypeControl) {
      const accountType = accountTypeControl.value;

      if (accountType === "0" && emailControl && passwordControl && enterpriseNameControl) {
        const email = emailControl.value ?? "";
        const password = passwordControl.value ?? "";
        const enterpriseName = enterpriseNameControl.value ?? "";

        if (email !== "" && password !== "" && enterpriseName !== "") {
          this.authService.createEnterpriseUser(email, password, enterpriseName).subscribe({
            next: () => {
              this.accountCreated = 1;
            },
            error: () => {
              this.accountCreated = 2
            }
          })
        } else {
          console.error("Ingrese datos validos")
        }
      } else if (accountType === "1" && emailControl && passwordControl && developerNameControl && developerLastNameControl) {
        const email = emailControl.value ?? "";
        const password = passwordControl.value ?? "";
        const firstName = developerNameControl.value ?? "";
        const lastName = developerLastNameControl.value ?? "";
        if (email !== "" && password !== "" && firstName !== "" && lastName !== "") {
          this.authService.createDeveloperUser(email, password, firstName, lastName).subscribe({
            next: () => {
              this.accountCreated = 1;
            },
            error: () => {
              this.accountCreated = 2
            }
          })
        } else {
          console.error("Ingrese datos validos")
        }
      } else console.log("Seleccione un tipo de usuario")
    }
  }

}
