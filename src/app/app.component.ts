import { Component } from '@angular/core';

// import model classes
import {Diagram} from './models/diagram';
import {Topic} from './models/topic';

/**
 * Main Venn Diagram generator app component.
 */
@Component({
  selector: 'venn-diagram-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // app title
  title:string = 'Venn Diagram Generator';

  // Venn diagram data model instance
  diagram:Diagram = new Diagram('My Venn Diagram');

  /**
   * Creates new Venn diagram designer app instance.
   */
  constructor() {

  }

}
