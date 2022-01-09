import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // lang:any = "en"

  lang = new BehaviorSubject("en")


  
getApplicationInfo():Observable<any>{
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`applicationInfos?lang=${language}`)
}
getApperance1(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`apperanceDataApi?lang=${language}&isMyData=false&page=1`,{headers:headers_object})
}
getApperance2(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`apperanceDataApi?lang=${language}&isMyData=false&page=2`,{headers:headers_object})
}
getApperance3(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`apperanceDataApi?lang=${language}&isMyData=false&page=3`,{headers:headers_object})
}

sendMessage(data:any):Observable<any>{
  const message = JSON.stringify(data.message)
  const obj={
    "message":message
  }
  return this._HttpClient.post(environment.baseUrl +"contactUsRequest" ,JSON.stringify(obj))
}

getMatiralAdvice():Observable<any>{
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`maritalAdvices?Lang=${language}`)
}
getMatiralAdviceDetailes(id):Observable<any>{
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`maritalAdvices/${id}?Lang=${language}`)
}

getBendingMaching(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+"pendingMatching" ,{headers:headers_object})
}

// 
ChangePendingStatus(token:any , data:any , num):Observable<any>{
  const obj = {
    userId:data.userId,
    status : Number(num)
  }
  console.log(obj);
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.post(environment.baseUrl+`pendingMatching/changeStatus` ,obj ,{headers:headers_object})
}

getServiceByCat():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+"services/serviceCategory/1")
}

// http://m3arees.in/api/
// 



getServiceDetailes(id:any):Observable<any>{
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`Services/${id}?Lang=${language}`)
}

getADS():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`adsImages/countries/1`)
}

getHomeText():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`adsTexts/countries/1`)
}

getSubscripstions():Observable<any>{
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`packages?lang=${language}`)
}
getSubscripstionsData(id):Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`packages/${id}/subPackages`)
}
getSubscripstionsDataDetailes(id):Observable<any>{
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`subPackages/${id}?lang=${language}`)
}

sendNominationInv(token:any , data:any):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()
  return this._HttpClient.post(environment.baseUrl+`userSubscriptions/sendnominationsCall?lang=${language}`,data,{headers:headers_object})
}
saveNominationInv(token:any , data:any):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.post(environment.baseUrl+`userSubscriptions/savenominationsCall`,data,{headers:headers_object})
}

getRandomPremium(num:number):Observable<any>{
  // 1 will return a man 
  return this._HttpClient.get(environment.baseUrl+`userSubscriptions/getRandomPremuimSubscribtion?genderId=${num}`)
}
getRandomPremiumDetailes(token:any ,  num:number):Observable<any>{
  // 1 will return a man 
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`userSubscriptions/getPremuimSubscribtions/${num}?Lang=${language}` , {headers:headers_object})
}







// subscriptions
getPremiumPackages(token:any ,num:number ):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()
  return this._HttpClient.get(environment.baseUrl+`userSubscriptions/getPremuimSubscribtions?genderId=${num}&lang=${language}`,{headers:headers_object})
}
// subscriptions
getPremiumPackagesDetails(token:any ,num:number):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+`userSubscriptions/getPremuimSubscribtions/${num}`,{headers:headers_object})
}



getSearchDropDowns():Observable<any>{
  // const language = this.lang.getValue()
  // return this._HttpClient.get(environment.baseUrl+`search/dropdowns?lang=${language}`)
  return this._HttpClient.get(environment.baseUrl+`search/dropdowns?lang=en`)
}
// 

search(token:any , data:any , num:any):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);


  console.log(data);
  

  const obj = {
    "results":[
      {
          "text":"Age",
          "ids":[Number(data.Age)]
      },
      {
          "text":"Appearances",
          "ids":[Number(data.Appearances)]
      },
      {
          "text":"Education Stage",
          "ids":[Number(data["Social Status"])]
      },
      {
          "text":"Nationality",
          "ids":[Number(data.Nationality)]
      },
       {
          "text":"Social Status",
          "ids":[Number(data["Social Status"])]
      }
  ]
  }
  console.log(obj);
  
  // const language = this.lang.getValue()
  // return this._HttpClient.post(environment.baseUrl+`search?lang=${language}&genderId=${num}`,obj,{headers:headers_object})
  return this._HttpClient.post(environment.baseUrl+`search?lang=en&genderId=${num}`,obj,{headers:headers_object})
}
getSearchSingleUserData(token , id):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  const language = this.lang.getValue()

  return this._HttpClient.get(environment.baseUrl+`search/${id}?Lang=${language}` ,{headers:headers_object} )
}

acceptSearch(token:any , data:any ,num ):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);

  const obj = {
    "userId": data.userId,
    "status":Number(num)
  }
  console.log(obj);
  
  return this._HttpClient.post(environment.baseUrl+`search/accept`,obj,{headers:headers_object})
}


getNominations(token:any):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+`notifications` , {headers:headers_object})
}
getNominationsDetailes(token:any , id:any):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+`notifications/${id}` , {headers:headers_object})
}
ChangeNominationsStatus(token:any , data:any , num):Observable<any>{
  const obj = {
    userId:data.userId,
    status : Number(num)
  }
  console.log(obj);
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.post(environment.baseUrl+`notifications/changeStatus` ,obj ,{headers:headers_object})
}

systemRecomendations(token:any , num):Observable<any>{
 
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+`search/systemRecomendations?genderId=${num}` ,{headers:headers_object})
}


  constructor(private _HttpClient:HttpClient , private AuthApi:AuthorizationService) { 
    this.lang =  this.AuthApi.lang ;
    if(localStorage.getItem("lang")){
      this.lang.next(localStorage.getItem("lang"))
    }

  }
}
