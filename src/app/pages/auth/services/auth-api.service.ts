import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
      mail:mail,
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

  getUserByEmail(email:string){
    return this._http.get(this.usersUrl+'email/'+email);
  }

  getUserById(id:number){
    return this._http.get<IUser>(this.usersUrl+`${id}`)
  }
}
