import { Component } from '@angular/core';
import { ConfigService } from '../config.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  messages:any
  actLang="Magyar"

  constructor(private config:ConfigService,
    private search:SearchService){
    this.config.getMessagges().subscribe(
      (res:any)=>{
        if (res.length!=0) this.messages=res.nav
      }
    )
  }
  changeLanguage(lang:any){
    this.actLang=lang.text
    this.config.setLanguage(lang)
  }

  setSearch(val:any){
    this.search.setSearch(val)
  }

  onFocusOutEvent(v:any){
    if (!v) this.setSearch("")

  }
}
