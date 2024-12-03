import {Component, Input} from '@angular/core';
import {IMessage} from "../../models/imessage";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  @Input() message!:IMessage;
  @Input() userRecordId!: string;

  getStyles(){
    return {
      'justifyContent': this.userRecordId==this.message.senderId?'end':'start'
    }
  }
}
