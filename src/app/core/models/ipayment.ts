export interface IPayment {
  id:number,
  developerId:number,
  project:{
    name:string,
    //state:string,
    company:{
      companyName:string,
      profileImgUrl:string,
    }
  },
  amount:string,
  status:string
  createdAt:string,
  completedAt:string,
}
