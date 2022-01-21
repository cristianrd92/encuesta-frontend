import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Encuesta } from './entidades/encuesta';
import { EncuestaService } from './services/encuesta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario encuesta musical';
  encuesta: Encuesta = new Encuesta();
  finish = false;
  data_create: any;
  data_get: Encuesta[]=[];
  errores:string[]=[];

  constructor(private encuestaService: EncuestaService,
  ) { }

  enviar() {
    this.errores=[]
    this.finish = true;
    this.encuestaService.create(this.encuesta).subscribe(resp => {
      this.data_create = resp;
      if(resp.error){
        this.errores.push(resp.error);
      }
    },
    err => {
      console.log(err)
      this.errores = err.error.errors as string[];
    })
    this.encuestaService.getEncuestas().subscribe(resp => {
      this.data_get = resp;
    })
  }

  goBack() {
    this.data_get=[];
    if(this.data_create!=null){
      this.data_create=null;
    }
    this.finish = false;
  }
}
