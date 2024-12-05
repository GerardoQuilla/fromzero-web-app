import {Component, OnInit} from '@angular/core';
import {ChatApiService} from "../../services/chat/chat-api.service";
import {IChat} from "../../models/ichat";
import {IMessage} from "../../models/imessage";
import {MessagesApiService} from "../../services/messages/messages-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css'
})
export class ChatPageComponent implements OnInit {

  chats: IChat[] = []
  messages: IMessage[] = [];
  accountType = ""
  selectedChat = 0

  currentContactName = ""
  currentContactImage = ""
  currentContactProfileId = ""

  userRecordId = ""

  messageContent = ""

  constructor(
    private router:Router,
    private _messageService: MessagesApiService,
    private _chatService: ChatApiService) {
  }

  ngOnInit(): void {
    let userType = localStorage.getItem('accountType');
    let recordId = localStorage.getItem('recordId');
    this.accountType = userType ? userType.toString() : ""
    this.userRecordId = recordId ? recordId.toString() : ""
    if (this.accountType === "E") {
      this._chatService.getAllChatsByCompany(this.userRecordId).subscribe(response => {
        this.chats = response;
      })
    } else if (this.accountType === "D") {
      this._chatService.getAllChatsByDeveloper(this.userRecordId).subscribe(response => {
        this.chats = response;
      })
    }
  }

  openChat(chatId: number) {
    this.selectedChat = chatId
    this._messageService.getMessagesByChatId(chatId).subscribe(response => {
      this.messages = response
    })
  }

  getChatsContainerStyleClass() {

    if (this.selectedChat !== 0) {

      if (this.chats.length >= 0 && this.chats.length <= 5) {
        return 'chats-container-sm'
      }
      return 'chats-container'
    }
    if (this.chats.length >= 0 && this.chats.length <= 5) {
      return 'no-chat-opened-chats-container-sm'
    }
    return 'no-chat-opened-chats-container'
  }

  handle(contact: any) {
    this.currentContactName = contact.contactName;
    this.currentContactImage = contact.contactImage;
    this.currentContactProfileId=contact.contactProfileId;
  }

  sendMessage(content: string) {
    if (content===""){
      console.error("Ingrese un mensaje")
      return
    }
    let newMessage: any = {
      chatId: this.selectedChat,
      senderId: this.userRecordId,
      content: this.messageContent
    }
    this._messageService.postMessage(this.selectedChat,this.userRecordId,this.messageContent).subscribe({
      next: (result) => {
        this.messages.push(newMessage)
        this.messageContent = ""
      },
      error: (err) => {
        console.error("No se pudo enviar el mensaje")
      }
    })

  }

  redirectToProfile(){
    if(this.currentContactProfileId!==""){
      let userType = localStorage.getItem('accountType');
      switch (userType) {
        case 'E':
          this.router.navigate(['/app/main/developer-profile', `${this.currentContactProfileId}`]);
          break;
        case 'D':
          this.router.navigate(['/app-developer/main/enterprise-profile', `${this.currentContactProfileId}`])
          break;
      }
    }
  }

}
