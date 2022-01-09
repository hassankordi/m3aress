import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-marital-detailes',
  templateUrl: './marital-detailes.component.html',
  styleUrls: ['./marital-detailes.component.scss']
})
export class MaritalDetailesComponent implements OnInit {
  imgUrl: any = environment.imagesUrl;
  images: any = []
  data: any = []
  constructor(private API: ApiService, private Router: ActivatedRoute) {

    const id = this.Router.snapshot.params.id
    this.API.getMatiralAdviceDetailes(id).subscribe((res) => {
      console.log(res);
      this.images=res.maritalAdviceImages
      this.data = res;
    }, (err) => {
      console.log(err);
    })
  }
  // sendData(data) {
  //   alert(data.id);

  // }
  ngOnInit(): void {
  }

}
