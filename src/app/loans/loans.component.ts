import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  imgUrl= environment.imagesUrl
  appInfo:any = [];
  
  constructor(private API:ApiService) { 
    this.API.getApplicationInfo().subscribe((res)=>{
      // this.images = res.adsImages
      this.appInfo = res 
      console.log(res);
    },(err)=>{console.log(err);
    })
  }
  

  ngOnInit(): void {
  }

}
