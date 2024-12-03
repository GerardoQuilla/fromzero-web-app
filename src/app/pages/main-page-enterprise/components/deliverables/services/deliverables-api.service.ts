import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDeliverable} from "../model/ideliverable";
import {BaseService} from "../../../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class DeliverablesApiService extends BaseService{

  url=""

  constructor(private http: HttpClient) {
    super();
    this.url =`${this.basePath}/deliverables`
  }

  getAllDeliverablesByProjectId(projectId:number){
    return this.http.get<IDeliverable[]>(`${this.url}/project/${projectId}`);
  }

  postDeliverable(deliverable:any){
    return this.http.post(`${this.url}`,deliverable);
  }

  getDeliverableById(deliverableId:number){
    return this.http.get<IDeliverable>(`${this.url}/${deliverableId}`);
  }

  /*sendDeliverable(deliverableId:number,developerMessage:string){
    return this.http.patch(`${this.url}/${deliverableId}/send`,{developerMessage});
  }*/

  sendDeliverable(deliverableId:number,developerMessage:string, files:File[]){
    const formData = new FormData();
    formData.append('developerMessage',developerMessage);
    if(files && files.length>0){
      files.forEach(file=>{
        formData.append('files',file,file.name);
      });
    }
    return this.http.patch(`${this.url}/${deliverableId}/send`,formData);
  }

  reviewDeliverable(deliverableId:number,accept:boolean){
    return this.http.patch(`${this.url}/${deliverableId}/review`,{accepted:accept})
  }
}
