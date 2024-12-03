import {Component} from '@angular/core';
import {ProfileService} from "../../../../core/services/profiles/profile.service";

@Component({
  selector: 'app-sidenav-developer',
  templateUrl: './sidenav-developer.component.html',
  styleUrl: './sidenav-developer.component.css'
})
export class SidenavDeveloperComponent {
  user:any;
  expand=false;
  constructor(
    private _profileService:ProfileService) {
  }
  ngOnInit(){
    const userId = Number(localStorage.getItem('id'));
    this._profileService.getDeveloperProfileById(userId).subscribe(profile => {
      this.user=profile;
    })
  }
  logout(): void {
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    localStorage.removeItem('accountType')
    localStorage.removeItem('recordId')
  }
  toggleExpand(){
    this.expand = !this.expand;
  }

}
