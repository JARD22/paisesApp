import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent  {
  termino:string ='';
  hayError:boolean=false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
   this.termino=termino    
  this.paisService.buscarCapital(this.termino)
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
