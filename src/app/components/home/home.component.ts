import { Component, OnInit } from '@angular/core';
import {MyService} from '../../../service/myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ MyService ]
})
export class HomeComponent implements OnInit {
  todaydate;

  constructor(
    private myservice:MyService
  ) {

  }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.getData();
  }

  getData(){
    this.myservice.getData().subscribe(heroes => console.log(heroes));;



  }

}
