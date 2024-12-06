export interface ICandidate {
  id:number,
  profileId:{
    RecordId:string
  },
  firstName:string,
  lastName:string,
  description:string,
  profileImgUrl:string
  user:{
    userId:number,
  }
}
