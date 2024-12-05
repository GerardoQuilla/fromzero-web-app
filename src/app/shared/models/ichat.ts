export interface IChat {
  id:number,
  developer:{
    id:number,
    profileId:string,
    firstName:string,
    lastName:string,
    profileImgUrl:string,
  },
  company:{
    id:number,
    profileId:string,
    companyName:string,
    profileImgUrl:string,
  },
  createdAt:string
}
