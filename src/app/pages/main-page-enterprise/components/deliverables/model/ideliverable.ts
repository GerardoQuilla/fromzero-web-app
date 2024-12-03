interface IDeliverableFile{
  id:number,
  name:string,
  url:string
}

export interface IDeliverable {
  id:number,
  name:string,
  description:string,
  date:Date,
  state?:string,
  developerMessage?:string
  projectId:number,
  files:IDeliverableFile[]
}
