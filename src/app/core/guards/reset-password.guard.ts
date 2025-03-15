import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const resetPasswordGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = route.queryParamMap.get("token");
  if(!token){
    console.log("Route not authorized.");
    router.navigate(['/login']);
    return false;
  }

  return true;
  
};
