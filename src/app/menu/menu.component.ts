import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private currentRoute = '';

  constructor(private route:Router) { 
    this.currentRoute = route.url.split('/')[1];
  }

  ngOnInit(): void {
    (document.getElementById('menu-nav') as HTMLFormElement).
    setAttribute('defaultPortfolio', this.currentRoute);
  }

}
