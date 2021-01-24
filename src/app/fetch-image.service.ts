import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"


@Injectable()
export class FetchImageService {

  constructor(private http: HttpClient) { }

  getImages(){
    this.http.get(`https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY`)
  }

}
