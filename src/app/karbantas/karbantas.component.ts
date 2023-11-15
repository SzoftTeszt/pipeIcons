import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-karbantas',
  templateUrl: './karbantas.component.html',
  styleUrls: ['./karbantas.component.css']
})
export class KarbantasComponent {

  products:any
  oszlopok:any
  newProduct:any={}
  keresendo:any

  mezo:any
  irany=false
  

  constructor(private base:BaseService, private config:ConfigService){
      this.base.getProducts().subscribe(
        (adatok)=>this.products=adatok
      )
      
      this.oszlopok=this.config.getProdutsColumns()
  }

  sort(key:any,type:any){
    this.mezo=key
    this.irany=!this.irany
  }

  addProduct(){
    this.base.addProduct(this.newProduct)
    this.newProduct={}
  }

  updateProduct(termek:any){
    this.base.updateProduct(termek)
  }

  deleteProduct(termek:any){
    this.base.deleteProduct(termek)
  }

}
