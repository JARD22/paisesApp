import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
  ]
})
export class PaisComponent  {

  termino:string ='';
  hayError:boolean=false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
   this.termino=termino    
  this.paisService.buscarPais(this.termino)
                  .subscribe((paises)=>{
                    this.hayError=false;
                    this.paises=paises
                    console.log(this.paises)
                  },(err)=>{
                    this.hayError=true;
                    console.log(err)
                    this.paises=[];
                  });
  }
  
sugerencias(evento:any){

}

}
