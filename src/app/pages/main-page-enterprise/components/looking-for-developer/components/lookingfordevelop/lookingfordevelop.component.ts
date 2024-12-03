import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {IDeveloperProfileTemp} from "../../../../../../core/models/ideveloper-profile";
import {ProfileService} from "../../../../../../core/services/profiles/profile.service";


@Component({
  selector: 'app-main-page-developer',
  templateUrl: './lookingfordevelop.component.html',
  styleUrl: './lookingfordevelop.component.css'
})
export class LookingfordevelopComponent implements OnInit{

  constructor(private router: Router,
              private _profilesService:ProfileService) {
  }
  developers!: IDeveloperProfileTemp[];

  ngOnInit(): void {
    this._profilesService.getAllDevelopers().subscribe(developers => {
      this.developers = developers;
    })
  }
  redirectToProfile(developerId:number){

    this.router.navigate(['/app/main/developer-profile', developerId]);
  }

}
