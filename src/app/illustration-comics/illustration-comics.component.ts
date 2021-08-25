import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-illustration-comics',
  templateUrl: './illustration-comics.component.html',
  styleUrls: ['./illustration-comics.component.css']
})
export class IllustrationComicsComponent implements OnInit {

  protected data: object = {};

  constructor(private http: HttpClient,
    private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.http.get(`/api/Search/Comic`)
    .subscribe((data: any) => {
      data.forEach((dataObj: any, dataObjIndex: number) => {
        const newEmbedScript = this.renderer.createElement('script');
        newEmbedScript.src = "//s.imgur.com/min/embed.js";
        newEmbedScript.charset = "utf-8";
        this.renderer.appendChild(document.head, newEmbedScript);

        const newEmbed = this.renderer.createElement('div');
        newEmbed.innerHTML = `<blockquote class="imgur-embed-pub" lang="en" data-id="a/${dataObj.link}"  ><a href="//imgur.com/a/${dataObj.link}">${dataObj.name}</a></blockquote>`;
        const comicDiv = this.renderer.selectRootElement('.comic-main', true);
        this.renderer.appendChild(comicDiv, newEmbed);
      })
    })
  }

}
