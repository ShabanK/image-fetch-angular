import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { FetchImageService } from "./fetch-image.service"

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FetchImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
