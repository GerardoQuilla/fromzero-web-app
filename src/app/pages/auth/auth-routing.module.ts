import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { resetPasswordGuard } from '../../core/guards/reset-password.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children:
      [
        {
          path: '',
          redirectTo: 'login',
          pathMatch: 'full',
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        },
        {
          path:'forgot-password',
          component: ForgotPasswordComponent
        },
        {
          path:'reset-password',
          component: ResetPasswordComponent,
          canActivate: [resetPasswordGuard]
        }
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
