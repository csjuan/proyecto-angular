import { Injectable } from '@angular/core';
import { alumnos, data } from '../../dashboard/pages/users/components/modelos';
import { BehaviorSubject, Subject, map, mergeMap,  take } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
    private _usuarios$ = new BehaviorSubject<alumnos[]>([]);
    private usuarios$ = this._usuarios$.asObservable();

  constructor(private httpClient: HttpClient) { }

  cargarUsuarios(): void {
    this.httpClient.get<alumnos[]>('http://localhost:3000/alumnos').subscribe({
        next:(respuesta) => {
            this._usuarios$.next(respuesta);
        } 
    })
  }

  getAlumno(): Subject<alumnos[]>{
    return this._usuarios$;
  }

  crearUsuario( alumno: data): void{
   this.httpClient.post<alumnos>('http://localhost:3000/alumnos', alumno).pipe(
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

  EditUser(id:number, NewData: alumnos): void{
    this.httpClient.put('http://localhost:3000/alumnos/' + id, NewData)
     .subscribe({ next:() => this.cargarUsuarios(),
   })
  }

  BorrarUser(id: number):void    {
    this.httpClient.delete('http://localhost:3000/alumnos/' + id)
    .pipe()
     .subscribe({ next:() => this.cargarUsuarios(),
   })
  }
}
 

 

