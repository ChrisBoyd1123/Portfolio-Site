import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-illustration-comics',
  templateUrl: './illustration-comics.component.html',
  styleUrls: ['./illustration-comics.component.css']
})
export class IllustrationComicsComponent implements OnInit {

  protected data: any = [];

  constructor(private http: HttpClient,
    private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.http.get(`/api/Search/Comic`)
    .subscribe((data: any) => {
      //TODO: Remove Imgur scripts on page re-load/re-init.
      if(this.data[this.data.length - 1]){
        console.log('data stored.');
        return;
      }

      data.forEach((dataObj: any, dataObjIndex: number) => {
        console.log('line 22', data, dataObj, dataObjIndex);
        this.data.push(dataObj);
        const newEmbedScript = this.renderer.createElement('script');
        newEmbedScript.src = "//s.imgur.com/min/embed.js";
        newEmbedScript.charset = "utf-8";
        const comicScriptDiv = this.renderer.selectRootElement('.comic-scripts', true);
        this.renderer.appendChild(comicScriptDiv, newEmbedScript);

        const newEmbed = this.renderer.createElement('div');
        newEmbed.innerHTML = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${dataObj.link}"  ><a href="//imgur.com/a/${dataObj.link}">${dataObj.name}</a></blockquote>`;
        const comicDiv = this.renderer.selectRootElement('.comic-main', true);
        this.renderer.appendChild(comicDiv, newEmbed);
      })
    })
  }

}
