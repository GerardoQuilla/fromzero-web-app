import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IProject} from "../models/iproject";
import {BaseService} from "../../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectsApiService extends BaseService{
  url = "";
  constructor(private http:HttpClient) {
    super();
    this.url =`${this.basePath}/projects`;
  }
  getAllProjectsByEnterpriseUserId(id:number){
    return this.http.get<IProject[]>(`${this.url}/company/${id}`)
  }
  getProjectsByDeveloperUserId(id:number){
    return this.http.get<IProject[]>(`${this.url}/developer/${id}`);
  }
  postProject(project:any){
    return this.http.post<IProject>(`${this.url}`,project)
  }
  assignDeveloperToProject(projectId:number,developerUserId:number,accept:boolean){
    return this.http.patch(`${this.url}/${projectId}/set-developer`,{developerId:developerUserId,accepted:accept})
  }
  getProjectsByState(state:string){
    let params = new HttpParams().set('state', state);
    return this.http.get<IProject[]>(`${this.url}/by-state`,{params})
  }
  getProjectById(id:number){
    return this.http.get<IProject>(`${this.url}/${id}`);
  }
  addCandidateToProject(projectId:number,developerUserId:number){
    return this.http.patch(`${this.url}/${projectId}/add-candidate`,{developerId:developerUserId})
  }
}
