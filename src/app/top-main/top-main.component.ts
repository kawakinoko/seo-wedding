import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-main',
  templateUrl: './top-main.component.html',
  styleUrls: ['./top-main.component.css']
})
export class TopMainComponent implements OnInit {

  intro = 'assets/images/intro2.png';
  photo = 'assets/images/2end1.png';
  constructor() { }

  ngOnInit() {
  }

}
