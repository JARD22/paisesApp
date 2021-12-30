import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiURL= 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }


  buscarPais(termino:string):Observable<Country[]>{
   return  this.http.get<Country[]>(`${this.apiURL}/name/${termino}`)
  }

 buscarCapital(termino:string):Observable<Country[]>{
  return  this.http.get<Country[]>(`${this.apiURL}/capital/${termino}`)
 }
 
 buscarCodigo(termino:string){
  return  this.http.get<Country[]>(`${this.apiURL}/alpha/${termino}`)
 }

}
