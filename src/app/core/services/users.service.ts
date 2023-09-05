import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, mergeMap,  take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { randomString } from 'src/app/shared/utils/randomToken';
import { data, user } from 'src/app/dashboard/pages/users/components/modelos';
import { environment } from 'src/environments/environment';







@Injectable({
  providedIn: 'root'
})
export class UsersService {
    private _usuarios$ = new BehaviorSubject<user[]>([]);
    private usuarios$ = this._usuarios$.asObservable();

  constructor(private httpClient: HttpClient) { }

  cargarUsuarios(): void {
    this.httpClient.get<user[]>(environment.baseUrl+'/user').subscribe({
        next:(respuesta) => {
            this._usuarios$.next(respuesta);
        } 
    })
  }

  getuser(): Subject<user[]>{
    return this._usuarios$;
  }

  crearUsuario( users:data): void{
    const token = randomString(10);
   this.httpClient.post<user>(environment.baseUrl+'/user', {...users, token}).pipe(
    mergeMap(usuarioCreado =>  this.usuarios$.pipe(
        take(1),
        map((arrayActual) => [...arrayActual, usuarioCreado])
    ))
   )
   .subscribe({
    next: (arrayActualizado) => {
        this._usuarios$.next(arrayActualizado);
    }
   })
  }

  EditUser(id:number, NewData: user): void{
    this.httpClient.put(environment.baseUrl+'/user/' + id, NewData)
     .subscribe({ next:() => this.cargarUsuarios(),
   })
  }

  BorrarUser(id: number):void {
    this.httpClient.delete(environment.baseUrl+'/user/' + id)
    .pipe()
     .subscribe({ next:() => this.cargarUsuarios(),
   })
  }
}
 

 

