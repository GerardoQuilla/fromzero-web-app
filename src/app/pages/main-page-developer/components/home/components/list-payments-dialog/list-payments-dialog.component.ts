import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPayment} from "../../../../../../core/models/ipayment";
import {PaymentService} from "../../../../../../core/services/payments/payment.service";

@Component({
  selector: 'app-list-payments-dialog',
  templateUrl: './list-payments-dialog.component.html',
  styleUrl: './list-payments-dialog.component.css'
})
export class ListPaymentsDialogComponent implements OnInit {

  payments:IPayment[]=[];
  //completedPayments:IPayment[]=[];

  constructor(
    public dialogRef:MatDialogRef<ListPaymentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private _paymentService:PaymentService
  ) {
  }

  ngOnInit(): void {
    this._paymentService.getPaymentsByDeveloper(this.data).subscribe(result => {
      this.payments=result
      //this.completedPayments=this.payments.filter(payment=>payment.status==="COMPLETADO")
    })
  }

  getPaymentStatusStyle(value:IPayment){
    return {
      'color':value.status==='COMPLETADO'?'green':'darkorange'
    }
  }
}
