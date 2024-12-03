import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {
  DeliverablesApiService
} from "../../../main-page-enterprise/components/deliverables/services/deliverables-api.service";
import {IDeliverable} from "../../../main-page-enterprise/components/deliverables/model/ideliverable";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-send-deliverable',
  templateUrl: './send-deliverable.component.html',
  styleUrl: './send-deliverable.component.css'
})
export class SendDeliverableComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);

  files: File[]=[];
  deliverable!:IDeliverable;
  developerMessage=new FormControl("",[Validators.required]);
  deliverableId?: number;
  sent=0;

  constructor(private route: ActivatedRoute,private delvsApi:DeliverablesApiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.deliverableId = +params['deliverableId'];
      this.delvsApi.getDeliverableById(this.deliverableId).subscribe(deliverable=>{
        this.deliverable=deliverable;
      })
    })
  }

  onFileSelected(event:any){
    this.files=Array.from(event.target.files);
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if(fileInput){
      fileInput.value = "";
    }
  }
  deleteFile(index:number){
    this.files.splice(index,1);
  }

  submitDeliverable(){
    if (this.developerMessage.invalid){
      console.log("Input no valido")
    }else{
      let deliverableId=Number(this.deliverableId)
      let message = this.developerMessage.value??'';
      this.delvsApi.sendDeliverable(deliverableId,message,this.files).subscribe({
        next:(response)=> {
          //this.sent=1
          this._snackBar.open("Enviado","Close",{
            duration: 3000,
          })
        },
        error:(response)=> {
          //this.sent=2
          this._snackBar.open("Error","Close",{
            duration: 2000,
          })
        }
      })
    }
  }

}
