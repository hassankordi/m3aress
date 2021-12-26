import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  imgUrl:any = environment.imagesUrl;
  constructor(private API:ApiService) {
    this.API.getADS().subscribe((res)=>{
      this.images = res.adsImages
      console.log(res);
    },(err)=>{console.log(err);
    })
   }
  images = [  
    // { img: "../../assets/5png/5e4d119238539.png" },  
    // { img: "../../assets/5png/5e4d119238539.png" },  
    // { img: "../assets/images/2.jpg" },  
    // { img: "../assets/images/3.jpg" },  
    // { img: "../assets/images/4.jpg" },  
    // { img: "../assets/images/5.jpg" },  
    // { img: "../assets/images/6.jpg" },  
    // { img: "../assets/images/7.jpg" },  
    // { img: "../assets/images/8.jpg" },  
    // { img: "../assets/images/9.jpg" },  
  ];  




  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };  

  
  closeModal(){
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display ="none";
    // alert("closse");
  }
  openModal(){
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display ="block";
  }
  ngOnInit(): void {
  }

}
