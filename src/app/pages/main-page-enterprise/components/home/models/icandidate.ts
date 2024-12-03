export interface ICandidate {
  id:number,
  firstName:string,
  lastName:string,
  description:string,
  profileImgUrl:string
  user:{
    userId:number,
  }
}
