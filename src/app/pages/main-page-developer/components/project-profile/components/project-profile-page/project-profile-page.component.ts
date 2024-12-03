import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICompanyProfile} from "../../../../../../core/models/icompany-profile";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-project-profile-page',
  templateUrl: './project-profile-page.component.html',
  styleUrl: './project-profile-page.component.css'
})
export class ProjectProfilePageComponent implements OnInit {
  enterpriseProfile!: ICompanyProfile;

  constructor(
    private route: ActivatedRoute,
    private _profileService: ProfileService) {
  }

  ngOnInit(): void {
    let enterpriseId: number
    this.route.params.subscribe(params => {
      enterpriseId = +params['enterpriseId'];
      this._profileService.getEnterpriseProfileById(enterpriseId).subscribe(enterprise => {
        this.enterpriseProfile = enterprise;
      })
    })
  }
}
