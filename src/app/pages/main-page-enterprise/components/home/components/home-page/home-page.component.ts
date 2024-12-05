import {Component, OnInit} from '@angular/core';
import {IProject} from "../../models/iproject";
import {ProjectsApiService} from "../../services/projects-api.service";
import {ICompanyProfile} from "../../../../../../core/models/icompany-profile";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent  implements OnInit {
  perfilUsuario!: ICompanyProfile;
  userProjects!: IProject[];
  constructor(
    private _projectsService:ProjectsApiService,
    private _profilesService:ProfileService
    ) {
  }

  ngOnInit(): void {
    const profileId = localStorage.getItem('recordId');
    if (profileId) {
      this._profilesService.getEnterpriseProfileById(profileId).subscribe(profile => {
        this.perfilUsuario = profile;
      });
      this._projectsService.getAllProjectsByEnterpriseUserId(profileId).subscribe(projects=>{
        this.userProjects=projects;
      })
    }
  }
}
