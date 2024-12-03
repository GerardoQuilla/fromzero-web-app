import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectsApiService} from "../../../../../main-page-enterprise/components/home/services/projects-api.service";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrl: './search-projects.component.css'
})
export class SearchProjectsComponent implements OnInit {

  constructor(
    private router: Router,
    private projectsService:ProjectsApiService) {
  }
  projects!:IProject[];

  ngOnInit(): void {
    this.projectsService.getProjectsByState("EN_BUSQUEDA").subscribe(projects=>{
      this.projects=projects
    })
  }

  redirectToProfile(ownerId: number): void {
    this.router.navigate(['/app-developer/main/enterprise-profile', ownerId]);
  }

  goToProject(id: number): void {
    this.router.navigate(['/app-developer/main/apply-to-project', id]);
  }

}
