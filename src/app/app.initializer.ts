import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { KarbantasComponent } from "./karbantas/karbantas.component";
import { SigninComponent } from "./signin/signin.component";
import { ConfigService } from "./config.service";

export function onAppInit(router:Router, http:HttpClient, config:ConfigService){
    return ()=>{
        return new Promise( (resolve)=>{
            
            let sign="hu"
            config.setLanguage({"text":"Magyar", "sign":"hu"})
            
            let utak

            let cMap=[ 
                {name:"HomeComponent", comp:HomeComponent},
                {name:"KarbantasComponent", comp:KarbantasComponent},
                {name:"SigninComponent", comp:SigninComponent}
            ]

            http.get('../assets/lang'+sign+".json").subscribe(
                (res:any)=>{
                    utak=res.nav.menu
                    let tomb=[]
                    utak.forEach(
                        (ut:any)=>{
                           
                            let komponens= cMap.find(
                                (e)=>ut.comp==e.name
                            )
                            tomb.push({path:ut.link, component:komponens?.comp})
                         }
                        )

                        tomb.push({path:"", component:HomeComponent})
                        tomb.push({path:"**", component:HomeComponent})  
                        console.log(tomb)                 
                        router.resetConfig(tomb)
                        resolve(true)                        
                    });
                }
              )    
    }
}