import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-karbantas',
  templateUrl: './karbantas.component.html',
  styleUrls: ['./karbantas.component.css']
})
export class KarbantasComponent {

  products:any
  
  constructor(private base:BaseService){
      this.base.getProducts().subscribe(
        (adatok)=>this.products=adatok
      )

  }
}
