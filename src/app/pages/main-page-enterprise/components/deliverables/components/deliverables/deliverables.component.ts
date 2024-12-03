import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeliverablesApiService} from "../../services/deliverables-api.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogAddDeliverableComponent} from "../dialog/dialog-add-deliverable.component";
import {FormControl} from "@angular/forms";
import {IDeliverable} from "../../model/ideliverable";
import {PayDeveloperComponent} from "../pay-developer/pay-developer.component";
import {PaymentDetailsComponent} from "../payment-details/payment-details.component";
import {PaymentService} from "../../../../../../core/services/payments/payment.service";

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrl: './deliverables.component.css'
})
export class DeliverablesComponent implements OnInit {

  deliverables!:IDeliverable[];

  deliverableCreated?:any;
  projectId?: number;

  name=new FormControl('');
  description=new FormControl('');
  exp_date=new FormControl(new Date());

  isProjectCompleted = false;
  isPaymentCompleted = false;

  constructor(private route: ActivatedRoute,
              private delvsApi: DeliverablesApiService,
              private _paymentService:PaymentService,
              public dialog:MatDialog) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];

      this.delvsApi.getAllDeliverablesByProjectId(this.projectId).subscribe(deliverables=>{
        this.deliverables=deliverables;
        this.isProjectCompleted=this.deliverables.every(item=>item.state==="COMPLETADO")

      })

      this._paymentService.getProjectPayment(this.projectId).subscribe({
        next: response => {
          if (response.status==="PENDIENTE"){
            this.isPaymentCompleted=false;
          }else if(response.status==="COMPLETADO"){
            this.isPaymentCompleted=true;
          }
        },
        error: err => {
          console.error("ERROR")
        }
      })

    })
  }

  openDialog(){
    const count=this.deliverables.length+1;
    const dialogRef=this.dialog.open(DialogAddDeliverableComponent, {
      data:{
        deliverableNumber:count,
        delv_name:this.name,
        delv_description:this.description,
        delv_exp_date:this.exp_date,
      }
    })
    dialogRef.afterClosed().subscribe(result=>{

      if (result !== undefined) {

        if (result.delv_name.value && result.delv_description.value && result.delv_exp_date.value) {

          this.deliverableCreated = {
            id: count,
            name: result.delv_name.value,
            description: result.delv_description.value,
            date: result.delv_exp_date.value,
            projectId: this.projectId
          }

          this.delvsApi.postDeliverable(this.deliverableCreated).subscribe(response=>{
            console.log(response)
          })
        }else console.error("Datos no validos")
      }

    })
  }

  goToReviewDelv(deliverableId:number){
    return ['/app','main',this.projectId,'deliverables',deliverableId]
  }

  payDeveloper(){
    const dialogRef=this.dialog.open(PayDeveloperComponent,{
      data:{
        projectId:this.projectId,
      },
      width:'500px',
      disableClose:true,
    })

    dialogRef.afterClosed().subscribe(result=>{
      this.isPaymentCompleted=result;
    })
  }

  paymentDetails(){
    const dialogRef=this.dialog.open(PaymentDetailsComponent,{
      data:{
        projectId:this.projectId,
      }
    })
  }

}
