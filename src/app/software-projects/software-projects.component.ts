import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-software-projects',
  templateUrl: './software-projects.component.html',
  styleUrls: ['./software-projects.component.css']
})
export class SoftwareProjectsComponent implements OnInit {

  constructor(private http: HttpClient,
    private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit(): void {
    this.http.get(`/api/Search/Project`)
    .subscribe((data: any) => {
      data.forEach((dataObj: any, dataObjIndex: number) => {
        const projectMain = this.renderer.selectRootElement('.project-main', true);
        const newProjectDiv = this.renderer.createElement('div');

        this.renderer.addClass(newProjectDiv, 'project-div');

        const newProjectTitle = this.renderer.createElement('h2');
        newProjectTitle.innerHTML = `<a href=${dataObj.link} target='_blank'>${dataObj.name}</a>`;

        const newProjectDesc = this.renderer.createElement('p');
        newProjectDesc.innerHTML = dataObj.desc;

        this.renderer.appendChild(projectMain, newProjectDiv);
        this.renderer.appendChild(newProjectDiv, newProjectTitle);
        this.renderer.appendChild(newProjectDiv, newProjectDesc);
      })
    })
  }

}
