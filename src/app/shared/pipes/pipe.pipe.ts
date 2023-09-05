import { Pipe, PipeTransform } from '@angular/core';
import { user } from 'src/app/dashboard/pages/users/components/modelos';


@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: user, ...args: unknown[]): unknown {
    return `${value.name} ${value.apellido}`;
  }

}
