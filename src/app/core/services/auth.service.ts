import { Injectable } from '@angular/core';
import { datalogin } from 'src/app/auth';
import {  Observable, map, } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/dashboard/pages/users/components/modelos';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { authAction } from 'src/app/store/auth/auth.actions';






@Injectable({
  providedIn: 'root'
})
export class AuthService {
   

  constructor(private router: Router,
    private httpClient: HttpClient,
    private store: Store,
    ) {}

  autenticado(): Observable<boolean>{
   return this.httpClient.get<user[]>(environment.baseUrl+'/user',{
    params: {
        token: localStorage.getItem('token') || '',
    }
   }).pipe(
    map((r) => {
        if (r.length) {
            const authUser = r[0];
            this.store.dispatch(authAction.setUser({datos: authUser}));
        }
        return !!r.length
    })
   )

  }

  login( data: datalogin): void{
   this.httpClient.get<user[]>(environment.baseUrl+'/user',{
    params: {
        email: data.email || '',
        password: data.password || '',}
   }).subscribe({
      next: (respuesta) => {
         if (respuesta.length) {
            const authUser = respuesta[0];
            this.store.dispatch(authAction.setUser({datos: authUser}));
            this.router.navigate(['/dashboard/home']);
            localStorage.setItem('token', authUser.token)
         }else {
            this.store.dispatch(authAction.setUser({datos: null}))
        }
      },
   })
  }
  public logout(): void {
    this.store.dispatch(authAction.setUser({ datos: null }))
  }
}
