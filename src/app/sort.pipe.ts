import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(adatok:any,mezo:any, irany:any) {
    if (!adatok) return null
    if (!mezo) return adatok


    adatok.sort(
      //-1,0,1
      (a:any,b:any)=>{return a[mezo].localeCompare(b[mezo],{ sensitivity: 'base' })}
    )
    return adatok
  }

}
