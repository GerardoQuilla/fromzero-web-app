import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-check-profile',
  templateUrl: './check-profile.component.html',
  styleUrl: './check-profile.component.css'
})
export class CheckProfileComponent {
  @Input() currentContactImage!: string;
  @Input() currentContactProfileId!: string;

  constructor(private router:Router) {
  }

  redirectToProfile(){
    if(this.currentContactProfileId!==""){
      let userType = localStorage.getItem('accountType');
      switch (userType) {
        case 'E':
          this.router.navigate(['/app/main/developer-profile', `${this.currentContactProfileId}`]);
          break;
        case 'D':
          this.router.navigate(['/app-developer/main/enterprise-profile', `${this.currentContactProfileId}`])
          break;
      }
    }
  }
}
