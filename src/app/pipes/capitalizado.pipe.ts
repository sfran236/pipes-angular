import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean = true): string {
    // console.log(value)
    value = value.toLocaleLowerCase()
    let nombres = value.split(' ');

    // console.log(nombres)
    // console.log(args)
    if (todas) {
      nombres = nombres.map( nombre =>{
        return nombre[0].toUpperCase() + nombre.substring(1)
      })
     
    }else{
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1)
    }
    return nombres.join(' ')
   
  }

}
