import {Component, Input} from '@angular/core';
import {IProject} from "../../../home/models/iproject";

@Component({
  selector: 'app-developer-repository-card',
  templateUrl: './developer-repository-card.component.html',
  styleUrl: './developer-repository-card.component.css'
})
export class DeveloperRepositoryCardComponent {
  @Input() perfilDeveloperRepository!: IProject[]

}
