import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMessage} from "../../models/imessage";
import {BaseService} from "../../../core/services/shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class MessagesApiService extends BaseService{
  url="";
  constructor(private http:HttpClient) {
    super();
    this.url = `${this.basePath}/messages`;
  }
  postMessage(chatId:number,senderId:string,content:string){
    return this.http.post(`${this.url}`,{chatId,senderId,content})
  }
  getMessagesByChatId(chatId:number){
    return this.http.get<IMessage[]>(`${this.url}/chat/${chatId}`)
  }
}
