import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, take } from 'rxjs';
import { cursos, data } from 'src/app/dashboard/pages/cursos';



const curso_: Observable<cursos[]> = of([
    {
        id: 1,
        curso: 'diseño grafico',
        duracion: '4 semanas',
        dificultad: 'facil',
    },
    {
        id: 2,
        curso: 'HTML',
        duracion: '6 semanas',
        dificultad: 'media',
    }, {
        id: 3,
        curso: 'phyton',
        duracion: '9 semanas',
        dificultad: 'dificil',
    }, {
        id: 4,
        curso: 'exel',
        duracion: '4 semanas',
        dificultad: 'media',
    },

]);

@Injectable({
  providedIn: 'root'
})
export class CursosService {
    public curso$ = new BehaviorSubject<cursos[]>([]);

  constructor() { }
  cargarProfesor(): void {
    curso_.subscribe({
        next:(cursoDeUsers_) =>this.curso$.next(cursoDeUsers_)
    })
    
  }
  getcurso(): Subject<cursos[]>{
    return this.curso$;
  }
  crearCurso( cursos: data): void{
    this.curso$.pipe(take(1)).subscribe({
        next: (newArray) => {
            this.curso$.next([...newArray, {...cursos, id: newArray.length + 1 },
            ]);
        }
    })
  }
  
  
  EditCurso(id:number, NewData: cursos): void{
    this.curso$.pipe(take(1)).subscribe({
        next: (newArray) => {
            this.curso$.next(newArray.map((curso)=> curso.id === id ?
             {...curso, ...NewData}: curso)
            );
        },
    });
  }
  BorrarCurso(id: number):void    {
    this.curso$.pipe(take(1)).subscribe({
      next: (newArray) => 
        this.curso$.next(newArray.filter((u) => u.id !== id)),  
    });
  }

 
}
