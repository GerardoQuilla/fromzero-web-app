import { Injectable } from '@angular/core';
import {BaseService} from "../shared/base.service";
import {HttpClient} from "@angular/common/http";
import {IPayment} from "../../models/ipayment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService extends BaseService{
  url=""
  constructor(private http:HttpClient) {
    super();
    this.url=`${this.basePath}/payments`;
  }
  getPaymentsByDeveloper(developerId:number){
    return this.http.get<IPayment[]>(`${this.url}/developer/${developerId}`);
  }
  getProjectPayment(projectId:number){
    return this.http.get<IPayment>(`${this.url}/project/${projectId}`);
  }
  completePayment(projectId:number,cardNumber:string,expirationDate:string,cvv:string){
    return this.http.patch(`${this.url}/project/${projectId}`,{cardNumber,expirationDate,cvv})
  }
}
