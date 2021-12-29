import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  
getApplicationInfo():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+"applicationInfos")
}
getApperance1(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+"apperanceDataApi?lang=en&isMyData=false&page=1",{headers:headers_object})
}
getApperance2(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+"apperanceDataApi?lang=en&isMyData=false&page=2",{headers:headers_object})
}
getApperance3(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+"apperanceDataApi?lang=en&isMyData=false&page=3",{headers:headers_object})
}

sendMessage(data:any):Observable<any>{
  const message = JSON.stringify(data.message)
  const obj={
    "message":message
  }
  return this._HttpClient.post(environment.baseUrl +"contactUsRequest" ,JSON.stringify(obj))
}

getMatiralAdvice():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+"maritalAdvices?Lang=en")
}


getBendingMaching(token):Observable<any>{
  let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
  return this._HttpClient.get(environment.baseUrl+"pendingMatching" ,{headers:headers_object})
}


getServiceByCat():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+"services/serviceCategory/1")
}

// http://m3arees.in/api/
// 



getServiceDetailes(id:any):Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`Services/${id}?Lang=ar`)
}

getADS():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`adsImages/countries/1`)
}

getSubscripstions():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`packages?lang=en`)
}
getSubscripstionsData(id):Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`packages/${id}/subPackages`)
}
getSubscripstionsDataDetailes(id):Observable<any>{
  return this._HttpClient.get(environment.baseUrl+`subPackages/${id}?lang=en`)
}

// getBendingMaching(id:any):Observable<any>{
//   return this._HttpClient.get(environment.baseUrl+`pendingMatching`)
// }


  constructor(private _HttpClient:HttpClient) { }
}
