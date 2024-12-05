export interface ICandidate {
  id:number,
  profileId:string,
  firstName:string,
  lastName:string,
  description:string,
  profileImgUrl:string
  user:{
    userId:number,
  }
}
