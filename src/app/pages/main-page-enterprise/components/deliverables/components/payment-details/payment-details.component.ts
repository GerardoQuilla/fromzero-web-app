import {Component, Inject, OnInit} from '@angular/core';
import {PaymentService} from "../../../../../../core/services/payments/payment.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPayment} from "../../../../../../core/models/ipayment";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{
  projectId:number = 0;
  payment!:IPayment;
  constructor(
    public dialogRef: MatDialogRef<PaymentDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{projectId:number},
    private paymentService: PaymentService) {
    this.projectId=data.projectId
  }
  ngOnInit(){
    this.paymentService.getProjectPayment(this.projectId).subscribe({
      next: response => {
        this.payment=response
      },
      error: err => {
        console.error("ERROR")
      }
    })
  }
}
