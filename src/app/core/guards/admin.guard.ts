import { inject } from '@angular/core';
import { CanActivateFn, Router, } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selecAdmin } from 'src/app/store/auth/auth.selectors';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); 
  return inject(Store).select(selecAdmin).pipe(
    map((esAdmin)=> {
        if(!esAdmin) return router.createUrlTree(['dashboard/home'])
        return true;
    })
  )
};
 