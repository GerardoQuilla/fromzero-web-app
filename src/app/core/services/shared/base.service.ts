import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  basePath: string = `${environment.serverBasePath}/v1/api`

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor() { }

}
