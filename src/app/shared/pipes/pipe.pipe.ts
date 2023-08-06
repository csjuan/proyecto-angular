import { Pipe, PipeTransform } from '@angular/core';
import { alumnos } from 'src/app/dashboard/pages/users/components/modelos';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: alumnos, ...args: unknown[]): unknown {
    return `${value.name} ${value.apellido}`;
  }

}
