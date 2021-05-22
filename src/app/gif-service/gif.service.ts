import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifService {

  constructor(public http: HttpClient) { }

  getTrendingGIF(){
      return this.http.get('https://api.giphy.com/v1/gifs/trending?api_key=FQ43ZThayuhVkZsz8EpK1i1gVYmjWuf1');
  }
}
