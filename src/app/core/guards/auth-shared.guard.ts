import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authSharedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const accountType = localStorage.getItem('accountType')
  if (accountType === 'E' || accountType === 'D') {
    return true
  }else router.navigate(['/']);
  console.log("Route not authorized")
  return false
};
