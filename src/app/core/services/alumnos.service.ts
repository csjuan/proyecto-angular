import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map, mergeMap,  take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { randomString } from 'src/app/shared/utils/randomToken';
import { alumnos, data } from 'src/app/dashboard/pages/alumnos/componentes/modelos';
import { environment } from 'src/environments/environment';






@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
    private _alumno$ = new BehaviorSubject<alumnos[]>([]);
    private alumno$ = this._alumno$.asObservable();

  constructor(private httpClient: HttpClient) { }

  cargarAlumno(): void {
    this.httpClient.get<alumnos[]>(environment.baseUrl+'/alumnos').subscribe({
        next:(respuesta) => {
            this._alumno$.next(respuesta);
        } 
    })
  }

  getAlumno(): Subject<alumnos[]>{
    return this._alumno$;
  }

  crearUsuario( users:data): void{
    const token = randomString(10);
   this.httpClient.post<alumnos>(environment.baseUrl+'/alumnos', {...users, token}).pipe(
    mergeMap(usuarioCreado =>  this.alumno$.pipe(
        take(1),
        map((arrayActual) => [...arrayActual, usuarioCreado])
    ))
   )
   .subscribe({
    next: (arrayActualizado) => {
        this._alumno$.next(arrayActualizado);
    }
   })
  }

  EditAlumno(id:number, NewData: alumnos): void{
    this.httpClient.put(environment.baseUrl+'/alumnos/' + id, NewData)
     .subscribe({ next:() => this.cargarAlumno(),
   })
  }

  BorrarAlumno(id: number):void {
    this.httpClient.delete(environment.baseUrl+'/alumnos/' + id)
    .pipe()
     .subscribe({ next:() => this.cargarAlumno(),
   })
  }
}
 

 

