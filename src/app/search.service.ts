import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSub= new Subject()
  
  constructor() { }

  getSearch(){
    return this.searchSub
  }

  setSearch(keresendo:any){
    this.searchSub.next(keresendo)
  }
}
