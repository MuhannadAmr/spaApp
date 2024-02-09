import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // imgSrc: string = "";
  layerSrc:string =""
  allImgSrc: string[] = ["../../assets/imgs/poert1.png", "../../assets/imgs/port2.png", "../../assets/imgs/port3.png", "../../assets/imgs/poert1.png", "../../assets/imgs/port2.png", "../../assets/imgs/port3.png"]

  displayPic(img:string) {
    this.layerSrc = img;
  }

  ngOnInit(): void {
    // let allElement = document.querySelectorAll(".inner");
    // let allImg = document.querySelectorAll(".col-md-4 img");

    // for (let index = 0; index < allElement.length; index++) {


    //   allElement[index].addEventListener("click", function (eInfo) {
    //     this.imgSrc = allImg[index].getAttribute("src");
    //   })
    // }

  }
  // showLayer(src: string) {
  //   this.imgSrc = src;
  // }
  // hideLayer() {
  //   this.imgSrc = "";
  // }

}

