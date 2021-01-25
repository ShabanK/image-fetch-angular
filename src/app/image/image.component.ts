import { Component, OnInit } from '@angular/core';
import { FetchImageService } from "../fetch-image.service"
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imageData:string;

  constructor(private fetchImage: FetchImageService) { }

  ngOnInit() {
    this.fetchImage.getImages().subscribe(imageData=>{
      this.imageData=imageData.urls.regular
      console.log(imageData.urls.regular)
    })
  }
  refetch(){
    this.fetchImage.getImages().subscribe(imageData=>{
      this.imageData=imageData.urls.regular
      console.log(imageData.urls.regular)
    })
  }

}
