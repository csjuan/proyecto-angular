import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject, map, mergeMap, take } from 'rxjs';
import { cursos, data } from 'src/app/dashboard/pages/cursos';
import { environment } from 'src/environments/environment';





@Injectable({
  providedIn: 'root'
})
export class CursosService {
    private _curso$ = new BehaviorSubject<cursos[]>([]);
    private curso$ = this._curso$.asObservable();

  constructor( private httpclient: HttpClient) { }
  cargarCurso(): void {
    this.httpclient.get<cursos[]>(environment.baseUrl+'/cursos').subscribe({
        next:(respuesta) => {
            this._curso$.next(respuesta);
        }
    })   
  }

  getcurso(): Subject<cursos[]>{
    return this._curso$;
  }

  crearCurso( cursos: data): void{
    this.httpclient.post<cursos>(environment.baseUrl+'/cursos', cursos).pipe(
    mergeMap(cursoCreado =>  this.curso$.pipe(
       take(1),
        map((arrayActual) => [...arrayActual, cursoCreado])
  ))
 )
 .subscribe({
   next: (arrayActualizado) => {
      this._curso$.next(arrayActualizado)
       }
   })
 } 
  
  
 EditCurso(id:number, NewData: cursos): void{
     this.httpclient.put(environment.baseUrl+'/cursos/' + id, NewData)
    .subscribe({ next:() => this.cargarCurso(),
  })
}
    
 BorrarCurso(id: number):void {
   this.httpclient.delete(environment.baseUrl+'/cursos/' + id)
   .pipe()
    .subscribe({ next:() => this.cargarCurso(),
 })
 }
   
}
