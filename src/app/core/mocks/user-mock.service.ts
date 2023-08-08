import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of, take } from 'rxjs';
import { alumnos, data } from 'src/app/dashboard/pages/users/components/modelos';


  const users_: Observable<alumnos[]> = of([
    {
        id: 1,
        name: 'fake-gitjose',
        apellido: 'gauna',
        direccion: 'colon 237',
        email:'gauna@gmail.com',
        password: '451f51dvb',  
    },
    {
        id: 2,
        name: 'fake-marcos',
        apellido: 'peña',
        direccion: 'charcas 237',
        email:'marpeña@gmail.com',
        password: 'gfdg654745',  
    },
    {
        id: 3,
        name: 'fake-rodrigo',
        apellido: 'sanchez',
        direccion:'alem 765',
        email:'rosanchez@gmail.com' ,
        password: 'jskcyhfdc5',  
    },
    {
        id: 4,
        name: 'fake-alberto',
        apellido: 'bocetti',
        direccion: 'lima 125',
        email:'bocetti@gmail.com' ,
        password: 'jkcvasicvbn',  
    },

]);
@Injectable({
    providedIn: 'root'
  })    
export class UserMockService {
    public usuarios$ = new BehaviorSubject<alumnos[]>([]);

    constructor() { }
  
    cargarUsuarios(): void {
      users_.subscribe({
          next:(usuariosDeUsers_) =>this.usuarios$.next(usuariosDeUsers_)
      })
      
    }
  
    getAlumno(): Subject<alumnos[]>{
      return this.usuarios$;
    }
    crearUsuario( alumno: data): void{
      this.usuarios$.pipe(take(1)).subscribe({
          next: (newArray) => {
              this.usuarios$.next([...newArray, {...alumno, id: newArray.length + 1 },
              ]);
          }
      })
    }
    EditUser(id:number, NewData: alumnos): void{
      this.usuarios$.pipe(take(1)).subscribe({
          next: (newArray) => {
              this.usuarios$.next(newArray.map((user)=> user.id === id ? {...user, ...NewData}: user)
              );
          },
      }); 
    }
    BorrarUser(id: number):void    {
      this.usuarios$.pipe(take(1)).subscribe({
        next: (newArray) => 
          this.usuarios$.next(newArray.filter((us) => us.id !== id)),  
      });
    }
  }
   
