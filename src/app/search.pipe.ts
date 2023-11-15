import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(adatok:any,keresendo:any) {
    if (!adatok) return null
    if (!keresendo || keresendo.length==0) return adatok

    return adatok.filter(
      (sor:any)=> {
        // console.log(sor)
        // console.log(sor.name)
        
        // return sor.name.toLowerCase().includes(keresendo.toLowerCase())
        return JSON.stringify(sor).toLowerCase().includes(keresendo.toLowerCase())
      }
    )

  }

}
