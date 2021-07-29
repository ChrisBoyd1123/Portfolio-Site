import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  @Input() defaultPortfolio = '';

  ngOnInit(): void {
    if((document.getElementById('menu-nav') as HTMLFormElement)
    .getAttribute('defaultPortfolio') === 'illustration'){
      this.onIllustrationSelect();
    }else if((document.getElementById('menu-nav') as HTMLFormElement)
    .getAttribute('defaultPortfolio') === 'software'){
      this.onSoftwareSelect();
    }else{
      this.onHomeSelect();
    }
  }

  onSoftwareSelect() {
    (document.getElementById('illustration-nav') as HTMLFormElement).style.display = 'none';
    (document.getElementById('software-nav') as HTMLFormElement).style.display = 'block';
    (document.getElementById('navbarDropdownMenuLink') as HTMLFormElement).innerHTML = 'SOFTWARE PORTFOLIO'
  }

  onIllustrationSelect() {
    (document.getElementById('illustration-nav') as HTMLFormElement).style.display = 'block';
    (document.getElementById('software-nav') as HTMLFormElement).style.display = 'none';
    (document.getElementById('navbarDropdownMenuLink') as HTMLFormElement).innerHTML = 'ILLUSTRATION PORTFOLIO'
  }

  onHomeSelect() {
    (document.getElementById('illustration-nav') as HTMLFormElement).style.display = 'none';
    (document.getElementById('software-nav') as HTMLFormElement).style.display = 'none';
  }

}
