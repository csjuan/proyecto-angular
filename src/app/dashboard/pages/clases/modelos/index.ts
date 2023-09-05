import { alumnos } from "../../alumnos/componentes/modelos";
import { cursos } from "../../cursos";


export interface clases {
    id: number;
    cursoId: number;
    alumnoId: number;
}
export interface CursosYalumnos extends clases{
    curso: cursos;
    alumno: alumnos;
}