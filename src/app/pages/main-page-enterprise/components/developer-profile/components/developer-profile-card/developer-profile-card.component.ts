import {Component, Input} from '@angular/core';
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {Router} from "@angular/router";
import {ChatApiService} from "../../../../../../shared/services/chat/chat-api.service";

@Component({
  selector: 'app-developer-profile-card',
  templateUrl: './developer-profile-card.component.html',
  styleUrl: './developer-profile-card.component.css'
})
export class DeveloperProfileCardComponent {
  @Input() perfilDeveloper!: IDeveloperProfileTemp;

  constructor(
    private router: Router,
    private _chatService: ChatApiService) {
  }

  goToMessage() {
    let recordId = localStorage.getItem('recordId')
    let profileRecordId = recordId ? recordId.toString() : ""
    this._chatService.createChat(this.perfilDeveloper.ProfileId,profileRecordId).subscribe({
      next: result => {
        this.router.navigate(["/app/main/shared/chats"])
      },
      error: (err) => {
        // ya existe
        console.log("Error o ya existe")
        this.router.navigate(["/app/main/shared/chats"])
      }
    })
  }
}
