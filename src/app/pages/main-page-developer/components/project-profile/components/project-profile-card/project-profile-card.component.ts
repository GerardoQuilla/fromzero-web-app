import {Component, Input} from '@angular/core';
import {ICompanyProfile} from "../../../../../../core/models/icompany-profile";
import {Router} from "@angular/router";
import {ChatApiService} from "../../../../../../shared/services/chat/chat-api.service";

@Component({
  selector: 'app-project-profile-card',
  templateUrl: './project-profile-card.component.html',
  styleUrl: './project-profile-card.component.css'
})
export class ProjectProfileCardComponent {
  @Input() perfilEnterprise!: ICompanyProfile;

  constructor(
    private router:Router,
    private _chatService: ChatApiService) { }

  goToMessage(){
    let recordId = localStorage.getItem('recordId')
    let profileRecordId = recordId ? recordId.toString() : ""
    this._chatService.createChat(profileRecordId,this.perfilEnterprise.ProfileId).subscribe({
      next: result => {
        this.router.navigate(["/app-developer/main/shared/chats"])
      },
      error: (err) => {
        // ya existe
        /*console.log("error o ya existe")
        console.log(err) // obejto del error
        console.log(err.status) estatus del error
        console.log(err.error.message) // mensaje personalizado
        */
        this.router.navigate(["/app-developer/main/shared/chats"])
      }
    })
  }

}
