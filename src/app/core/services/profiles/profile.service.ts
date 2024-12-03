import { Injectable } from '@angular/core';
import {BaseService} from "../shared/base.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICompanyProfile} from "../../models/icompany-profile";
import {IDeveloperProfileTemp} from "../../models/ideveloper-profile";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService{

  url:string ="";

  constructor(private _http: HttpClient) {
    super();
    this.url=`${this.basePath}/profiles/`;
  }

  getAllDevelopers(){
    return this._http.get<IDeveloperProfileTemp[]>(this.url+'developers',this.httpOptions)
  }

  getEnterpriseProfileById(id: any): Observable<ICompanyProfile> {
    return this._http.get<ICompanyProfile>(this.url+'company/'+id,this.httpOptions);
  }

  getDeveloperProfileById(id: any): Observable<IDeveloperProfileTemp> {
    return this._http.get<IDeveloperProfileTemp>(this.url + 'developer/' + id,this.httpOptions);
  }

  updateDeveloperProfile(id: number, updateDeveloper: any): Observable<any>{
    const url = this.url + 'developer/' + id;
    return this._http.put(url, updateDeveloper,this.httpOptions);
  }

  updateEnterpriseProfile(id: number, updateEnterprise: any): Observable<any>{
    const url = this.url + 'company/' + id;
    return this._http.put(url, updateEnterprise,this.httpOptions);
  }

  getDeveloperDataByEmail(email:string){
    return this._http.get(`${this.url}developer-data/${email}`)
  }

  getCompanyDataByEmail(email:string){
    return this._http.get(`${this.url}company-data/${email}`)
  }

}
