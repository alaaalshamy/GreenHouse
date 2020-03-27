import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.scss']
})
export class IndexHomeComponent implements OnInit {
 
  constructor() { 
    // this.owlElement.next([200])

  }

  ngOnInit() {
  }
  mySlideImages = ['banner.jpg','banner3.jpg','banner2.jpg'];
   
  play(ob){
    alert(ob)
  }
}
