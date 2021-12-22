import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


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


getBendingMaching():Observable<any>{
  return this._HttpClient.get(environment.baseUrl+"pendingMatching")
}



  constructor(private _HttpClient:HttpClient) { }
}
