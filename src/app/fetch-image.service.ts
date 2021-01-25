import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { pluck } from 'rxjs/operator/pluck';
// require("dotenv").config()
// console.log(process.env.ACCESS_KEY)

interface imageData{
  urls:{
    regular:string
  }
}


@Injectable()
export class FetchImageService {

  constructor(private http: HttpClient) { }

  getImages(){
    return this.http.get<imageData>(`https://api.unsplash.com/photos/random`, {
      headers: {
        Authorization: `Client-ID e1Ap-eIxZlrgqU3gg1peqFv4N8UaoxyTp4Aa7VtO_AQ`
      }
    })
  }

}
