import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GifService } from '../gif-service/gif.service';

@Component({
  selector: 'app-giph',
  templateUrl: './giph.component.html',
  styleUrls: ['./giph.component.css']
})
export class GiphComponent implements OnInit {

    gifs = [];
  constructor(public http: HttpClient, public gifService: GifService) { 
      this.getGif();
  }

  public getGif(){
      this.gifService.getTrendingGIF().subscribe(data=>{
          this.gifs = data["data"];
      })
  }

  searchGIF(keyWord: HTMLInputElement): void{
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key=FQ43ZThayuhVkZsz8EpK1i1gVYmjWuf1&q='+keyWord.value).subscribe((response: Response) => {
          this.gifs = response["data"];
          console.log(this.gifs)
      })
  }
  ngOnInit(): void {
  }

}
