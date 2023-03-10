import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = 'Capitan America'
  nombre2:string = 'frAncisCo aRiel hoLa'
  arreglo = [1,2,3,4,5,6,7,8,9,10]
  PI:number = Math.PI
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();
  videoUrl: string = 'https://www.youtube.com/embed/ns7bMWRS6zk'
  activar:boolean = true;



  valorPromesa = new Promise<string>((resolve) =>{

    setTimeout(() =>{
      resolve('llego la data');
    },4500)

  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle:'Primera',
      casa: 20
    }
  }
}
