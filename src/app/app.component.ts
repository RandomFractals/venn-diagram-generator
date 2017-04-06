import { Component } from '@angular/core';

// import model classes
import {Diagram} from './diagram';
import {Topic} from './topic';

/**
 * Main Venn Diagram generator app component.
 */
@Component({
  selector: 'venn-diagram-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'Venn Diagram Generator';
  diagram:Diagram = new Diagram('My Venn Diagram');

  constructor() {
    // add 3 test topics for now
    this.diagram.topics.push(new Topic('Test 1'));
    this.diagram.topics.push(new Topic('Test 1'));
    this.diagram.topics.push(new Topic('Test 1'));    
  }
}
