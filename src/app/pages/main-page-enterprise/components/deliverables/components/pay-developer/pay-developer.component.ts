import {Component, Inject} from '@angular/core';
import {PaymentService} from "../../../../../../core/services/payments/payment.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pay-developer',
  templateUrl: './pay-developer.component.html',
  styleUrl: './pay-developer.component.css'
})
export class PayDeveloperComponent {
  cardNumber:string=""
  expirationDate:string="yyyy-MM"
  cvv:string=""
  projectId:number=0

  constructor(
    public dialogRef: MatDialogRef<PayDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{projectId:number},
    private paymentService:PaymentService) {
    this.projectId=data.projectId
  }

  payDeveloper(){
    if (this.cardNumber!=="" && this.expirationDate!=="" && this.cvv!==""){
      this.paymentService.completePayment(
        this.projectId,
        this.cardNumber,
        this.expirationDate,
        this.cvv
      ).subscribe({
        next: res=>{
          this.dialogRef.close(true);
        },
        error: err => {
          console.error("ERROR")
        }
      })
    }else console.error("Datos no validos")
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

}
