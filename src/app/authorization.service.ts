import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  // headersOpthins = new HttpHeaders()

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  // this._Authorization.isAdmin.next(true) ;
  // this._Authorization.isUser.next(false) ;
  // this._Authorization.isAdmin.getValue()

  isLogin = new BehaviorSubject(false)
  lang = new BehaviorSubject("en")
  // isAdmin = new BehaviorSubject(false);
  // isUser =  new BehaviorSubject(false)  


  //   {
  //     "PHONE":"50471428",
  //    "COUNTRYCODE":"+965",
  //    "PASSWORD":"Asd@123456"
  // }
  login(userData): Observable<any> {
    const data = {
      "PHONE": userData.PHONE,
      "COUNTRYCODE": userData.COUNTRYCODE,
      "PASSWORD": userData.PASSWORD
    }
    return this._HttpClient.post(environment.baseUrl + "users/login", data)
  }

  register(userData, gender: number): Observable<any> {
    // if (userData.gender == "male") {
    //   userData.gender = 0

    // }
    // else {
    //   userData.gender = 1


    // }
    gender = Number(gender)
    const data = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      countryCode: userData.countryCode,
      password: userData.password,
      confirmPassword: userData.confirmPassword,
      gender: gender,
    }
    console.log(data);

    return this._HttpClient.post(environment.baseUrl + "users/register", data)
  }

  fillParentData(token , parentData) {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const obj = {
      "guardianFemaleName": parentData.name,
      "guardianFemalePhone": parentData.phone,
      "guardianFemaleCountryCode": parentData.countryCode
    }

    return this._HttpClient.put<any>(
      environment.baseUrl + "users/updateTermsAndConditionForFemale", obj, { headers: headers_object })

  }

  getProfile(token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._HttpClient.get(environment.baseUrl + "users/userProfile?Lang=en", { headers: headers_object })
  }
  editProfile(token, data: any, gender: any): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    let obj = {};
    console.log(token);

    if (gender == 'true') {
      obj = {
        FirstName: data.FirstName,
        FamilyName: data.FamilyName,
        phone: data.phone,
        countryCode: data.countryCode,
      }
      console.log(obj);


    }
    else {

      obj = {
        FirstName: data.FirstName,
        FamilyName: data.FamilyName,
        phone: data.phone,
        countryCode: data.countryCode,
        guardianFemaleName: data.guardianFemaleName,
        guardianFemalePhone: data.guardianFemalePhone,
        guardianFemaleCountryCode: data.guardianFemaleCountryCode,
      }
      console.log(obj);


    }

    console.log(headers_object);


    return this._HttpClient.put<any>(
      environment.baseUrl + "users/editProfile", obj, { headers: headers_object })
  }

  // putFactory(factory) {
  //   return this._HttpClient.put<any>(
  //     environment.baseUrl + `/factories/${factory.id}`,factory,this.httpOptions);
  // }
  // 

  changePassword(token, data): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);

    return this._HttpClient.post(environment.baseUrl + "users/changePassword", data, { headers: headers_object })
  }








  getUsersCount(): Observable<any> {
    return this._HttpClient.get(environment.baseUrl + "users/count")
  }

  isUserSubscribeInPackage(token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._HttpClient.get(environment.baseUrl + "users/isUserSubscribeInPackage", { headers: headers_object })
  }
  isUserFillData(token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._HttpClient.get(environment.baseUrl + "users/isUserFillData", { headers: headers_object })
  }


  // female toookkkkennn
  isFemaleFillGuardianData(token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._HttpClient.get(environment.baseUrl + "users/isFemaleFillGuardianData", { headers: headers_object })
  }


  addUserAppearance(userData1, userData2, userData3, token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const obj = {
      "results": [
        {
          "text": "Length",
          "ids": [userData1.length]
        },
        {
          "text": "Weight",
          "ids": [userData1.Weight]
        },
        {
          "text": "Appearances",
          "ids": [userData1.Appearances]
        },
        {
          "text": "Body Type",
          "ids": [userData1.BodyType]
        },
        {
          "text": "Hair Color",
          "ids": [userData1.HairColor]
        },
        {
          "text": "Hair Length",
          "ids": [userData1.HairLength]
        },
        {
          "text": "Hair Type",
          "ids": [userData1.HairType]
        },
        {
          "text": "Skin Color",
          "ids": [userData1.SkinColor]
        },








        {
          "text": "Age",
          "ids": [userData2.Age]
        },
        {
          "text": "Smoke",
          "ids": [userData2.Smoke]
        },
        {
          "text": "More Boys",
          "ids": [userData2.MoreBoys]
        },
        {
          "text": "Number of Children",
          "ids": [userData2.NumberofChildren]
        },
        {
          "text": "Marriage Type",
          "ids": [userData2.MarriageType]
        },
        {
          "text": "Occupation",
          "ids": [userData2.Occupation]
        },
        {
          "text": "Social Status",
          "ids": [userData2.SocialStatus]
        },




        {
          "text": "Another Languages",
          "ids": [userData3.AnotherLanguages]
        },
        {
          "text": "Mother Language",
          "ids": [userData3.MotherLanguage]
        },
        {
          "text": "Education Stage",
          "ids": [userData3.EducationStage]
        },
        {
          "text": " Nationality",
          "ids": [userData3.Nationality]
        },

        {
          "text": "Religion Value ",
          "ids": [userData3.ReligionValue]
        },
        {
          "text": "Religion",
          "ids": [userData3.Religion]
        },

      ]
      ,
      "isMyData": 1
    }
    console.log(obj);

    // const data = {
    //   firstName: userData1.firstName,
    //   lastName: userData1.lastName,
    //   phone: userData1.phone,
    //   countryCode: userData1.countryCode,
    //   password: userData1.password,
    //   confirmPassword: userData1.confirmPassword,

    // }
    // console.log(data);

    return this._HttpClient.post(environment.baseUrl + "users/appearanceData?Lang=en", obj, { headers: headers_object })
  }
  putUserAppearance(userData1, userData2, userData3, token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const obj = {
      "results": [
        {
          "text": "Length",
          "ids": [userData1.length]
        },
        {
          "text": "Weight",
          "ids": [userData1.Weight]
        },
        {
          "text": "Appearances",
          "ids": [userData1.Appearances]
        },
        {
          "text": "Body Type",
          "ids": [userData1.BodyType]
        },
        {
          "text": "Hair Color",
          "ids": [userData1.HairColor]
        },
        {
          "text": "Hair Length",
          "ids": [userData1.HairLength]
        },
        {
          "text": "Hair Type",
          "ids": [userData1.HairType]
        },
        {
          "text": "Skin Color",
          "ids": [userData1.SkinColor]
        },








        {
          "text": "Age",
          "ids": [userData2.Age]
        },
        {
          "text": "Smoke",
          "ids": [userData2.Smoke]
        },
        {
          "text": "More Boys",
          "ids": [userData2.MoreBoys]
        },
        {
          "text": "Number of Children",
          "ids": [userData2.NumberofChildren]
        },
        {
          "text": "Marriage Type",
          "ids": [userData2.MarriageType]
        },
        {
          "text": "Occupation",
          "ids": [userData2.Occupation]
        },
        {
          "text": "Social Status",
          "ids": [userData2.SocialStatus]
        },




        {
          "text": "Another Languages",
          "ids": [userData3.AnotherLanguages]
        },
        {
          "text": "Mother Language",
          "ids": [userData3.MotherLanguage]
        },
        {
          "text": "Education Stage",
          "ids": [userData3.EducationStage]
        },
        {
          "text": " Nationality",
          "ids": [userData3.Nationality]
        },

        {
          "text": "Religion Value ",
          "ids": [userData3.ReligionValue]
        },
        {
          "text": "Religion",
          "ids": [userData3.Religion]
        },

      ]
      ,
      "isMyData": 1
    }
    console.log(obj);

    const language = this.lang.getValue()


    return this._HttpClient.put(environment.baseUrl + `users/appearanceData?lang=${language}`, obj, { headers: headers_object })
  }
  addPartnerAppearance(userData1, userData2, userData3, token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const obj = {
      "results": [
        {
          "text": "Length",
          "ids": [userData1.length]
        },
        {
          "text": "Weight",
          "ids": [userData1.Weight]
        },
        {
          "text": "Appearances",
          "ids": [userData1.Appearances]
        },
        {
          "text": "Body Type",
          "ids": [userData1.BodyType]
        },
        {
          "text": "Hair Color",
          "ids": [userData1.HairColor]
        },
        {
          "text": "Hair Length",
          "ids": [userData1.HairLength]
        },
        {
          "text": "Hair Type",
          "ids": [userData1.HairType]
        },
        {
          "text": "Skin Color",
          "ids": [userData1.SkinColor]
        },








        {
          "text": "Age",
          "ids": [userData2.Age]
        },
        {
          "text": "Smoke",
          "ids": [userData2.Smoke]
        },
        {
          "text": "More Boys",
          "ids": [userData2.MoreBoys]
        },
        {
          "text": "Number of Children",
          "ids": [userData2.NumberofChildren]
        },
        {
          "text": "Marriage Type",
          "ids": [userData2.MarriageType]
        },
        {
          "text": "Occupation",
          "ids": [userData2.Occupation]
        },
        {
          "text": "Social Status",
          "ids": [userData2.SocialStatus]
        },




        {
          "text": "Another Languages",
          "ids": [userData3.AnotherLanguages]
        },
        {
          "text": "Mother Language",
          "ids": [userData3.MotherLanguage]
        },
        {
          "text": "Education Stage",
          "ids": [userData3.EducationStage]
        },
        {
          "text": " Nationality",
          "ids": [userData3.Nationality]
        },

        {
          "text": "Religion Value ",
          "ids": [userData3.ReligionValue]
        },
        {
          "text": "Religion",
          "ids": [userData3.Religion]
        },

      ]
      ,
      "isMyData": 0
    }
    console.log(obj);



    return this._HttpClient.post(environment.baseUrl + "users/appearanceData?Lang=en", obj, { headers: headers_object })
  }
  putPartnerAppearance(userData1, userData2, userData3, token): Observable<any> {
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    const obj = {
      "results": [
        {
          "text": "Length",
          "ids": [userData1.length]
        },
        {
          "text": "Weight",
          "ids": [userData1.Weight]
        },
        {
          "text": "Appearances",
          "ids": [userData1.Appearances]
        },
        {
          "text": "Body Type",
          "ids": [userData1.BodyType]
        },
        {
          "text": "Hair Color",
          "ids": [userData1.HairColor]
        },
        {
          "text": "Hair Length",
          "ids": [userData1.HairLength]
        },
        {
          "text": "Hair Type",
          "ids": [userData1.HairType]
        },
        {
          "text": "Skin Color",
          "ids": [userData1.SkinColor]
        },








        {
          "text": "Age",
          "ids": [userData2.Age]
        },
        {
          "text": "Smoke",
          "ids": [userData2.Smoke]
        },
        {
          "text": "More Boys",
          "ids": [userData2.MoreBoys]
        },
        {
          "text": "Number of Children",
          "ids": [userData2.NumberofChildren]
        },
        {
          "text": "Marriage Type",
          "ids": [userData2.MarriageType]
        },
        {
          "text": "Occupation",
          "ids": [userData2.Occupation]
        },
        {
          "text": "Social Status",
          "ids": [userData2.SocialStatus]
        },




        {
          "text": "Another Languages",
          "ids": [userData3.AnotherLanguages]
        },
        {
          "text": "Mother Language",
          "ids": [userData3.MotherLanguage]
        },
        {
          "text": "Education Stage",
          "ids": [userData3.EducationStage]
        },
        {
          "text": " Nationality",
          "ids": [userData3.Nationality]
        },

        {
          "text": "Religion Value ",
          "ids": [userData3.ReligionValue]
        },
        {
          "text": "Religion",
          "ids": [userData3.Religion]
        },

      ]
      ,
      "isMyData": 0
    }
    console.log(obj);

    const language = this.lang.getValue()
    return this._HttpClient.put(environment.baseUrl + `users/appearanceData?lang=${language}`, obj, { headers: headers_object })
  }


  sendNumToRestesPass(data): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + "users/send", data)
  }
  sendCodeToRestesPass(data): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + "users/validate", data)
  }
  sendpassToRestesPass(data): Observable<any> {
    return this._HttpClient.post(environment.baseUrl + "users/reset", data)
  }





  constructor(private _HttpClient: HttpClient) {
    if(localStorage.getItem("lang")){
      this.lang.next(localStorage.getItem("lang"))
    }

   }
  /*
 
   obj= {
      "results":[
          {
              "text":"Age",
              "ids":[1,2]
          },
          {
              "text":"Smoke",
              "ids":[1]
          },
          {
              "text":"More Boys",
              "ids":[1]
          },
          {
              "text":"Another Languages",
              "ids":[1,2,3]
          },
          {
              "text":"Appearances",
              "ids":[2]
          },
          {
              "text":"Body Type",
              "ids":[1]
          },
          {
              "text":"Education Stage",
              "ids":[1]
          },
          {
              "text":"Hair Color",
              "ids":[1]
          },
          {
              "text":"Number of Children",
              "ids":[1]
          },
          {
              "text":"Hair Length",
              "ids":[1]
          },
          {
              "text":"Hair Type",
              "ids":[1]
          },
          {
              "text":"Length",
              "ids":[1]
          },
           {
               "text":"Marriage Type",
              "ids":[1]
           },
          {
           
              "text":"Mother Language",
              "ids":[1]
          },
          {
              "text":"Occupation",
              "ids":[1]
          },
          {
              "text":"Religion",
              "ids":[1]
          },
          {
              "text":"Religion Value",
              "ids":[1]
          },
          {
              "text":"Skin Color",
              "ids":[1]
          },
          {
              "text":"Social Status",
              "ids":[1]
          },
          {
              "text":"Weight",
              "ids":[1]
          },
          {
              "text":"Nationality",
              "ids":[1]
          }
      ],
      "isMyData":0
    } */
}

