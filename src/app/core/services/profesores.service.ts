import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,  Subject, map, mergeMap, take } from 'rxjs';
import { data, profesores } from 'src/app/dashboard/pages/profesores';
import { environment } from 'src/environments/environment';





   

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
    private _profesor$ = new BehaviorSubject<profesores[]>([]);
    private profesor$ = this._profesor$.asObservable();

  constructor( private httpclient: HttpClient) {}

  cargarProfesor(): void {
    this.httpclient.get<profesores[]>(environment.baseUrl+'/profesores').subscribe({
        next:(respuesta) => {
            this._profesor$.next(respuesta);
        }
    })   
  }
  getProfesor(): Subject<profesores[]>{
    return this._profesor$;
  }
  crearProfesor( profesores: data): void{
    this.httpclient.post<profesores>(environment.baseUrl+'/profesores/', profesores).pipe(
        mergeMap(profesorCreado =>  this.profesor$.pipe(
            take(1),
            map((arrayActual) => [...arrayActual, profesorCreado])
        ))
       )
       .subscribe({
        next: (arrayActualizado) => {
            this._profesor$.next(arrayActualizado);
        }
       })
      }
   

  EditProfesor(id:number, NewData: profesores): void{
    this.httpclient.put(environment.baseUrl+'/profesores/' + id, NewData)
     .subscribe({ next:() => this.cargarProfesor(),
   })
  }

  BorrarProfesor(id: number):void  {
    this.httpclient.delete(environment.baseUrl+'/profesores/' + id)
    .pipe()
     .subscribe({ next:() => this.cargarProfesor(),
   })
  }
   
}
