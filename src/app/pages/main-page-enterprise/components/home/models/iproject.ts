import {ICandidate} from "./icandidate";

export interface IProject {
  id:number,
  name:string,
  description:string,
  state:string,
  progress:number,
  company:{
    id:number,
    companyName:string,
    profileImgUrl:string
  },
  developer:{
    id:number,
    firstName:string,
    lastName:string,
    profileImgUrl:string
  },
  candidates:ICandidate[],
  languages:string[],
  frameworks:string[],
  type:string,
  budget:string,
  //methodologies:string
}
