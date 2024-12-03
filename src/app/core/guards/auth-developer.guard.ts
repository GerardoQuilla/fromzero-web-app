import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authDeveloperGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const accountType = localStorage.getItem('accountType')
  if (accountType === 'D') {
    return true;
  }else if (accountType === 'E') {
    router.navigate(['/app/main/home']);
  }else router.navigate(['/']);
  console.log("Route not authorized")
  return false;
};
