import {Component, OnInit} from '@angular/core';
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {IProject} from "../../../../../main-page-enterprise/components/home/models/iproject";
import {ProjectsApiService} from "../../../../../main-page-enterprise/components/home/services/projects-api.service";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-home-page-developer',
  templateUrl: './home-page-developer.component.html',
  styleUrl: './home-page-developer.component.css'
})
export class HomePageDeveloperComponent implements OnInit{
  perfilUsuario!: IDeveloperProfileTemp;
  userProjects!:IProject[];

  constructor(
    private _projectsService:ProjectsApiService,
    private _profileService:ProfileService) {
  }

  ngOnInit(): void {
    const userId = localStorage.getItem('id');
    if (userId) {
      this._profileService.getDeveloperProfileById(+userId).subscribe(profile => {
        this.perfilUsuario = profile;
      });
      this._projectsService.getProjectsByDeveloperUserId(+userId).subscribe(projects=>{
        this.userProjects=projects
      })
    }
  }
}
