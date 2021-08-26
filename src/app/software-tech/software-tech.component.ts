import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-software-tech',
  templateUrl: './software-tech.component.html',
  styleUrls: ['./software-tech.component.css']
})
export class SoftwareBioComponent implements OnInit {

  constructor(private http: HttpClient,
    private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.http.get(`/api/Search/TechSkill`)
    .subscribe((data: any) => {

      for(const property in data){
        data[property].forEach((dataString: string, dataStrIndex: number) => {
          const newListElem = this.renderer.createElement('li');
          this.renderer.addClass(newListElem, `${property}-li`);
          const newListText = this.renderer.createText(dataString);
          const languageMain = this.renderer.selectRootElement(`.tech-${property}`, true);
  
          this.renderer.appendChild(languageMain, newListElem);
          this.renderer.appendChild(newListElem, newListText);
        })
      }
      /*
      data.languages.forEach((dataString: string, dataStrIndex: number) => {
        const newListElem = this.renderer.createElement('li');
        this.renderer.addClass(newListElem, 'language');
        const newListText = this.renderer.createText(dataString);
        const languageMain = this.renderer.selectRootElement('.tech-languages', true);

        this.renderer.appendChild(languageMain, newListElem);
        this.renderer.appendChild(newListElem, newListText);
      })
      */
    })
  }

}
