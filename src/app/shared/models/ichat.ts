export interface IChat {
  id:number,
  developer:{
    profileId:string,
    firstName:string,
    lastName:string,
    profileImgUrl:string,
  },
  company:{
    profileId:string,
    companyName:string,
    profileImgUrl:string,
  },
  createdAt:string
}
