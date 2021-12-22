import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-send-us',
  templateUrl: './send-us.component.html',
  styleUrls: ['./send-us.component.scss']
})
export class SendUsComponent implements OnInit {



  data = new FormGroup({
    firstName: new FormControl('',[]) ,
    lastName: new FormControl('',[]) ,
    email: new FormControl('',[]) ,
    phone: new FormControl('',[]) ,
    message: new FormControl('',[]) ,
  })


  sendData(){
    console.log(this.data);
    
    this.API.sendMessage(this.data).subscribe((res)=>{console.log(res);
    },(err)=>{console.log(err);
    })

  }
  constructor(private API:ApiService) { }

  ngOnInit(): void {
  }

}
