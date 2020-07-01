import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], text: string): any {

    text = text.toLowerCase();

    if (text === '') {
      return value;
    }

    return value.filter(element => {
      return element.nombre.toLowerCase().includes(text);
    });
  }

}
