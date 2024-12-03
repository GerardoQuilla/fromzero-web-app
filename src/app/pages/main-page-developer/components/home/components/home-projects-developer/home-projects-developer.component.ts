import {Component, Input} from '@angular/core';
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";

@Component({
  selector: 'app-home-projects-developer',
  templateUrl: './home-projects-developer.component.html',
  styleUrl: './home-projects-developer.component.css'
})
export class HomeProjectsDeveloperComponent {
  emptyProjects = new Array(5);
  @Input() perfilUsuarioProjects!: IProject[];

  constructor() {
  }

  goToDeliverables(projectId:number){
    return ['/app-developer','main',projectId,'deliverables']
  }

}
