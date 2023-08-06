import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, take } from 'rxjs';
import { data, profesores } from 'src/app/dashboard/pages/profesores';

const profesor_: Observable<profesores[]> = of([
    {
        id: 1,
        name: 'juan',
        apellido: 'gomez',
        direccion: 'alem 267',
        email:'gomez@gmail.com',
        password: '451sdv',  
    },
    {
        id: 2,
        name: 'marcos',
        apellido: 'moon',
        direccion: 'lima 985',
        email:'moon@gmail.com',
        password: 'gfdg654967',  
    },
    {
        id: 3,
        name: 'ricardo',
        apellido: 'sanchez',
        direccion:'libertad 565',
        email:'sanchez@gmail.com' ,
        password: 'jskcyhfdc5',  
    },
    {
        id: 4,
        name: 'alberto',
        apellido: 'bocetti',
        direccion: 'lima 125',
        email:'bocetti@gmail.com' ,
        password: 'jkcvasicvbn',  
    },
]);      

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
    public profesor$ = new BehaviorSubject<profesores[]>([]);

  constructor() { }

  cargarProfesor(): void {
    profesor_.subscribe({
        next:(profeDeUsers_) =>this.profesor$.next(profeDeUsers_)
    })
    
  }
  getProfesor(): Subject<profesores[]>{
    return this.profesor$;
  }
  crearProfesor( profesores: data): void{
    this.profesor$.pipe(take(1)).subscribe({
        next: (newArray) => {
            this.profesor$.next([...newArray, {...profesores, id: newArray.length + 1 },
            ]);
        }
    })
  }

  EditProfesor(id:number, NewData: profesores): void{
    this.profesor$.pipe(take(1)).subscribe({
        next: (newArray) => {
            this.profesor$.next(newArray.map((profe)=> profe.id === id ?
             {...profe, ...NewData}: profe)
            );
        },
    });
  }
  BorrarProfesor(id: number):void    {
    this.profesor$.pipe(take(1)).subscribe({
      next: (newArray) => 
        this.profesor$.next(newArray.filter((u) => u.id !== id)),  
    });
  }

 

}
