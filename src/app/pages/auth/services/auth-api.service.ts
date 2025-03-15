import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IDeveloperRegister} from "../model/ideveloper-register";
import {BaseService} from "../../../core/services/shared/base.service";
import {IUserLogin} from "../model/iuser-login";
import {ICompanyRegister} from "../model/icompany-register";
import {IUser} from "../model/iuser";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService extends BaseService{
  authUrl = '';
  usersUrl='';

  constructor(private _http: HttpClient) {
    super();
    this.authUrl = `${this.basePath}/auth/`;
    this.usersUrl=`${this.basePath}/users/`
  }

  createEnterpriseUser(mail: string, password: string, enterpriseName: string) {

    const user: ICompanyRegister={
      email:mail,
      password:password,
      companyName:enterpriseName
    }

    return this._http.post(this.authUrl + 'register-company', user);
  }

  createDeveloperUser(mail: string, password: string, developerName: string, developerLastName: string) {
    const user: IDeveloperRegister = {
      email: mail,
      password: password,
      firstName: developerName,
      lastName: developerLastName
    }
    return this._http.post(this.authUrl + 'register-developer', user);

  }

  validateUser(email: string, password: string) {
    const signInResource = { email, password };
    return this._http.post<IUserLogin>(this.authUrl + 'sign-in', signInResource);
  }

  forgotPassword(email:string){
    return this._http.post<any>(this.authUrl+'forgot-password',{email});
  }

  resetPassword(newPassword:string,token:string){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this._http.patch<any>(this.authUrl+'reset-password',{newPassword},{headers});
  }

  getUserById(id:number){
    return this._http.get<IUser>(this.usersUrl+`${id}`)
  }
}
