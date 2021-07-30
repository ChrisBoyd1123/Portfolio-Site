import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentGenRoute = '';
  currentRoute = '';

  constructor(private route:Router) { 
    this.currentGenRoute = route.url.split('/')[1];
    this.currentRoute = route.url.split('/')[route.url.split('/').length - 1];
  }

  ngOnInit(): void {

  }

}
