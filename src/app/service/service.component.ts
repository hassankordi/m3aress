import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  service:any = []
  serviceDetailes:any={
    companyName:"companyName" ,
    email:"@gmail.com",
    phone:"010",
    address:"@gmail.com",
    whatsAppNumber:"@gmail.com",
  }
  imgUrl:any = environment.imagesUrl;
  constructor(private API:ApiService) {
    this.API.getServiceByCat().subscribe((res)=>{
      this.service = res
      console.log(res);
    },(err)=>{console.log(err);
    })
   }
 

   openSer(obj:any){
     this.API.getServiceDetailes(obj.id).subscribe((res)=>{
      this.serviceDetailes = res
      console.log(res);

    },(err)=>{console.log(err);
    })
   
   }

  ngOnInit(): void {
  }

}
