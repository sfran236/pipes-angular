import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, ok:boolean = true): string {
    let ocultado:string = value
    // let v:string = '*'
    console.log('hola',value)
    if (ok) {
      ocultado = '*'.repeat(value.length)
      console.log(ocultado)
    } 
    return ocultado
  
  }

}
