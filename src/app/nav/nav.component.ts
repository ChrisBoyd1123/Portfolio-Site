import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input('portfolio') section?: string;
  @Input('page') page?: string;

  ngOnInit(): void {
    this.onSectionLoad();
    this.onPageLoad();
  }

  onSectionLoad() {
    if(this.section === 'illustration'){
      this.onIllustrationSelect();
    }else if(this.section === 'software'){
      this.onSoftwareSelect();
    }else{
      this.onHomeSelect();
    }
  }

  onPageLoad(){
    if(this.page && this.page !== 'landing-page'){
      this.setActiveTab(this.page);
    }else if(this.section && this.section !== 'landing-page'){
      this.setActiveTab(this.section);
    }else{
      this.setActiveTab('home');
    }
  }

  onSoftwareSelect() {
    (document.getElementById('illustration-nav') as HTMLFormElement).style.display = 'none';
    (document.getElementById('software-nav') as HTMLFormElement).style.display = 'block';
    (document.getElementById('navbarDropdownMenuLink') as HTMLFormElement).innerHTML = 'DEVELOPER PORTFOLIO'
  }

  onIllustrationSelect() {
    (document.getElementById('illustration-nav') as HTMLFormElement).style.display = 'block';
    (document.getElementById('software-nav') as HTMLFormElement).style.display = 'none';
    (document.getElementById('navbarDropdownMenuLink') as HTMLFormElement).innerHTML = 'ARTIST PORTFOLIO'
  }

  onHomeSelect() {
    (document.getElementById('illustration-nav') as HTMLFormElement).style.display = 'none';
    (document.getElementById('software-nav') as HTMLFormElement).style.display = 'none';
  }

  setActiveTab(tabName: string) {
    $( `a:contains('${tabName.toUpperCase()}')` ).addClass('active');
  }

}
