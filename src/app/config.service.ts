import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private termekekOszlopok=[
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"price", text:"Ár", type:"number"},
    {key:"description", text:"Leírás", type:"text"},
    {key:"image_url", text:"Kép", type:"text"},
  ]

  
  constructor() { }

  getProdutsColumns(){
    return this.termekekOszlopok
  }
}
