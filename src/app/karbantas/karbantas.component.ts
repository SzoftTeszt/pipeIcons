import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-karbantas',
  templateUrl: './karbantas.component.html',
  styleUrls: ['./karbantas.component.css']
})
export class KarbantasComponent {

  products:any
  oszlopok:any=[]
  newProduct:any={}
  keresendo:any
  messages:any
  mezo:any
  irany=0
  

  constructor(private base:BaseService, 
      private config:ConfigService,
      private search:SearchService){

      this.base.getProducts().subscribe(
        (adatok)=>this.products=adatok
      )
      
      this.config.getMessagges().subscribe(
        (res:any)=>{        
          if (res.length!=0){
            this.messages=res.karbantartas
            this.oszlopok=res.karbantartas?.termekekOszlopok
            // console.log("resif",res)
            // console.log("oszlopokif",this.oszlopok)
            this.mezo=this.oszlopok[0]
          }
        }
        )

        this.search.getSearch().subscribe(
          (res)=>this.keresendo=res
        )
      
  }

  rendez(key:any,type:any){
    
    this.mezo=key
    this.irany++
    if (this.irany==3)
    {
      this.irany=0
      this.mezo=this.oszlopok[0].key

    }
  
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
