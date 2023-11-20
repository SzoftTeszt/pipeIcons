import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(adatok:any,mezo:any, irany:any) {
    if (!adatok) return null
    if (!mezo) return adatok
    
    if (irany<=1) irany=1
    else irany =-1

    adatok.sort(
      //-1,0,1
      (a:any,b:any)=>{

        if (typeof(a[mezo])=="string"){       
          return irany*(a[mezo].localeCompare(b[mezo],{ sensitivity: 'base' }))
        }
          else {
          return Math.sign(a[mezo]-b[mezo])*irany
          // 5,3 (1)
          // 1,8 (-1)
          // 6.6 (0)
        }    
      
      }
    )
    return adatok
  }

}
