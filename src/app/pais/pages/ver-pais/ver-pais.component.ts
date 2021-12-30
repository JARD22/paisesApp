import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {switchMap} from 'rxjs/operators'
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private paisService:PaisService) { }

  ngOnInit(): void {
 
    
    this.route.params
    .pipe(
      switchMap(({code})=>this.paisService.buscarCodigo(code))
    ).subscribe(resp=>console.log(resp))

    // this.route.params.subscribe(({code})=>{
    //   this.paisService.buscarCodigo(code)
    //                   .subscribe((paises:Country[])=>{
    //                     console.log(paises)
    //                   })
    // })

  }

}
