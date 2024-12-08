import {Component, inject, Inject} from '@angular/core';
import {PaymentService} from "../../../../../../core/services/payments/payment.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-pay-developer',
  templateUrl: './pay-developer.component.html',
  styleUrl: './pay-developer.component.css'
})
export class PayDeveloperComponent {
  private _formBuilder = inject(FormBuilder)

  cardFormGroup=this._formBuilder.group({
    cardNumber:['', Validators.required],
    expirationDate:['', Validators.required],
    cvv:['', Validators.required]
  })

  ratingFormGroup = this._formBuilder.group({
    developerRating:['0', Validators.required],
  })
  currentRating='0'
  isLinear = true;
  /*cardNumber:string=""
  expirationDate:string="yyyy-MM"
  cvv:string=""
  developerRating:number=0*/
  projectId:number=0

  constructor(
    public dialogRef: MatDialogRef<PayDeveloperComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{projectId:number},
    private paymentService:PaymentService) {
    this.projectId=data.projectId
  }

  payDeveloper(){
    //if (this.cardNumber!=="" && this.expirationDate!=="" && this.cvv!==""){
    if (this.cardFormGroup.valid){

      let cardNumber= this.cardFormGroup.get('cardNumber')?.value
      let expirationDate = this.cardFormGroup.get('expirationDate')?.value
      let cvv = this.cardFormGroup.get('cvv')?.value
      let developerRating = this.ratingFormGroup.get('developerRating')?.value

      this.paymentService.completePayment(
        this.projectId,
        /*this.cardNumber,
        this.expirationDate,
        this.cvv,
        this.developerRating*/
        cardNumber!,
        expirationDate!,
        cvv!,
        +developerRating!
      ).subscribe({
        next: res=>{
          this.dialogRef.close(true);
        },
        error: err => {
          console.error("ERROR")
        }
      })
      /*console.log(+developerRating!)
      console.log(typeof +developerRating!)*/
      this.dialogRef.close(true);
    }else console.error("Datos no validos")
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

  formatLabel(value:number){
    return `${value}`
  }

  onRatingChange(event: any): void {
    this.currentRating=String(this.ratingFormGroup.get('developerRating')?.value)
  }
}
