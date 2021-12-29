import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  images = [
    // '../../assets/5png/Group 10132.png',
    // '../../assets/5png/Group 10132.png',
    // '../../assets/5png/Group 10132.png',
  ];

  // +"/uploads/db1ac8d7-b0f2-4b68-bbf6-2382af897337_610bdc77973e1.jpg"
  
  imgUrl:any = environment.imagesUrl;
  constructor(private API:ApiService) {
    this.API.getADS().subscribe((res)=>{
      this.images = res.homeAds
      console.log(res.adsImages[0]);
    },(err)=>{console.log(err);
    })


    // console.log(this.imgUrl);
    
   }

  ngOnInit(): void {}
}
