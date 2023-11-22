import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private textSub= new BehaviorSubject([])
  
  constructor(private http:HttpClient) {
    // this.loadLangJson('hu')
   }

  loadLangJson(sign:any){
    this.http.get('../assets/lang'+sign+".json").subscribe(
      (res:any)=>this.textSub.next(res)
    )
  }

  getMessagges(){
    return this.textSub
  }

  setLanguage(lang:any){
    this.loadLangJson(lang.sign)
  }
}
