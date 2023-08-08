import { Injectable } from '@angular/core';
import { datalogin } from 'src/app/auth';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Router } from '@angular/router';
import { alumnos } from 'src/app/dashboard/pages/users/components/modelos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private _userauth$ = new BehaviorSubject<alumnos | null>(null);
    public userauth$ = this._userauth$.asObservable();

  constructor(private router: Router,
    private httpClient: HttpClient,
    ) {}

  autenticado(): Observable<boolean>{
    return this.userauth$.pipe(take(1),map((u) => !!u))

  }

  login( data: datalogin): void{
   this.httpClient.get<alumnos[]>('http://localhost:3000/alumnos',{
    params: {
        email: data.email || '',
        password: data.password || '',}
   }).subscribe({
      next: (respuesta) => {
         if (respuesta.length) {
            this._userauth$.next(respuesta[0]);
            this.router.navigate(['/dashboard']);
         }else {
            this._userauth$.next(null);
        }
      },
   })
  }
}
