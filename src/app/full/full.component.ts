import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
// import { setInterval } from 'timers';
import { ApiService } from '../api.service';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  token: any = localStorage.getItem("userToken");

  textArr: any = []
  text: any = ""


  togglePremiumDetails: boolean = false
  randomData: any = {
    socialStatus: [""],
    appearance: [""],
    educationStage: [""],
    age: [""],
    nationality: [""]
  }
  randomDataDetailes: any = {
    results: []
  }



  imgUrl: any = environment.imagesUrl;
  appInfo: any = {}
  constructor(private API: ApiService, private AuthAPI: AuthorizationService, private router: Router) {
    this.API.getADS().subscribe((res) => {
      this.images = res.adsImages
      console.log(res);
    }, (err) => {
      console.log(err);
    })
    this.API.getApplicationInfo().subscribe((res) => {
      // this.images = res.adsImages
      this.appInfo = res
      console.log(res);
    }, (err) => {
      console.log(err);
    })

    this.API.getHomeText().subscribe((res) => {
      console.log(res);
      this.textArr = res;
    }, (err) => {
      console.log(err);
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


  closeModal() {
    // myModal
    (document.getElementById("myModal") as HTMLElement).style.display = "none";
    // alert("closse");
  }

  openModal() {
    // alert("open");

    (document.getElementById("myModal") as HTMLElement).style.display = "block";
  }




  closeModal1() {
    // myModal
    this.togglePremiumDetails = false;
    (document.getElementById("myModal1") as HTMLElement).style.display = "none";
    // alert("closse");
  }
  openModal1() {
    // alert("open");

    (document.getElementById("myModal1") as HTMLElement).style.display = "block";


  }
  premiumDetails(id) {
    console.log(id);

    this.API.getRandomPremiumDetailes(this.token, id).subscribe((res) => {
      console.log(res);
      this.randomDataDetailes = res;
      this.togglePremiumDetails = true;
    }, (err) => {
      console.log(err);
      if (err.error.messageError == 60) {
        this.togglePremiumDetails = false;
        alert("يرجي التاكد انك مشترك في احدي الباقات");
        this.router.navigate(["/subscription"])


      }
    })

  }

  changeStatus(data: any, num) {
    // userId
    // alert(num)
    console.log(data);

    this.API.acceptSearch(this.token, data, num).subscribe((res) => {

      console.log(res);
      if (res.messageSuccess == 1) {
        alert("تم");
        this.closeModal1()
      }
      // this.singleUserData = res

    }, (err) => {
      alert("حدث خطأ حاول مرة اخرى لاحقا");
      this.closeModal1()
      console.log(err);
    });

  }

  ngOnInit(): void {
    const token: any = localStorage.getItem('userToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    const decodedUserToken = helper.decodeToken(token);
    console.log(decodedUserToken);
    this.AuthAPI.getProfile(token).subscribe((res) => {
      console.log(res);

      // openModal1
      if (res.gender == false) {
        // send 0 in gender
        this.API.getRandomPremium(0).subscribe((res) => {
          console.log(res);
          this.openModal1()
          this.randomData = res
        }, (err) => {
          console.log(err);
        })
      }
      else {
        // send 1
        this.API.getRandomPremium(1).subscribe((res) => {
          this.randomData = res
          console.log(res);
          this.openModal1()
        }, (err) => {
          console.log(err);
        })
      }
    }, (err) => {
      console.log(err);
    });


    let i = 0
    setTimeout(() => {
      setInterval(() => {

        if (i >= this.textArr.length) {

          i = 0;
          this.text = this.textArr[i].title;
          i = ++i
        } else {

          this.text = this.textArr[i].title;
          i = ++i
        }

      }, 10000);

    }, 200)

  }


}
