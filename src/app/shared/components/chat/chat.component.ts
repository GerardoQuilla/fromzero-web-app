import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IChat} from "../../models/ichat";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  @Input() chat!:IChat
  @Input() currentUser!:string
  @Output() openChat = new EventEmitter<number>()
  @Output() currentContact = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {

  }

  selectedChat(chatId:number){
    this.openChat.emit(chatId);
    if (this.currentUser==='E'){
      this.currentContact.emit({
        contactName:this.chat.developer.firstName+" "+this.chat.developer.lastName,
        contactImage:this.chat.developer.profileImgUrl
      })
    }else if (this.currentUser==='D'){
      this.currentContact.emit({
        contactName:this.chat.company.companyName,
        contactImage:this.chat.company.profileImgUrl
      })
    }
  }

}
