import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-sidenav-enterprise',
  templateUrl: './sidenav-enterprise.component.html',
  styleUrl: './sidenav-enterprise.component.css'
})
export class SidenavEnterpriseComponent implements OnInit{

  user:any;
  expand=false;
  constructor(private _profileService:ProfileService) {
  }
  ngOnInit(){
    const userId = Number(localStorage.getItem('id'));
    this._profileService.getEnterpriseProfileById(userId).subscribe(profile => {
      this.user=profile;
    })
  }

  toggleExpand(){
    this.expand = !this.expand;
  }

  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('accountType')
    localStorage.removeItem('recordId')
  }

}
