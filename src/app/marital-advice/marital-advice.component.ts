import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-marital-advice',
  templateUrl: './marital-advice.component.html',
  styleUrls: ['./marital-advice.component.scss']
})
export class MaritalAdviceComponent implements OnInit {

  data: any = []
  imgUrl: any = environment.imagesUrl;

  constructor(private API: ApiService) {
    this.API.getMatiralAdvice().subscribe((res) => {
      console.log(res);
      this.data = res
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

 
 
  
 

}
