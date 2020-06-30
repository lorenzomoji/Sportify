import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], text: string): any {
    console.log('Value: ', value);
    console.log('Text: ', text);

    text = text.toLowerCase();

    if (text === '') {
      return value;
    }

    return value.filter(element => {
      return element.nombre.toLowerCase().includes(text);
    });
  }

}
