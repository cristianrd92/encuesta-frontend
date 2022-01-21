import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Encuesta } from "../entidades/encuesta";
import { environment } from "src/environments/environment";

@Injectable()
export class EncuestaService {

  private urlEndPoint:string = environment.ApiURL+'api/encuesta';
  constructor(private http: HttpClient) { }

  getEncuestas() : Observable<Encuesta[]> {
    return this.http.get<Encuesta[]>(this.urlEndPoint).pipe(
      catchError(e => {
        return throwError(e);
      }),
    map( (response) => {
      let encuestas = response as Encuesta[];
      return encuestas.map(encuesta => {
        return encuesta;
      });
    })
    );
  }

  create(encuesta: Encuesta): Observable<any> {
    return this.http.post(this.urlEndPoint, encuesta).pipe(
      map((response: any) => response as any),
      catchError(e => {
        if (e.status == 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    )
  }

}