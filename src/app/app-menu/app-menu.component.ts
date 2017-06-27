import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {
  
  // app title
  title:string = 'Venn Diagram Generator';

  constructor() { }

  ngOnInit() {
  }

}
