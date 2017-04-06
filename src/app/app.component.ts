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

  // Venn diagram data model
  diagram:Diagram = new Diagram('My Venn Diagram');

  // starter stroke and fill color palette for topics
  colorPalette = [
    '#a6cee3',
    '#1f78b4',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a',
    '#ffff99',
    '#b15928'
  ];

  /**
   * Creates new Venn diagram designer app insntace.
   */
  constructor() {

    // add 3 starter topics for now
    this.addTopic('Topic 1');
    this.addTopic('Topic 2');
    this.addTopic('Topic 3');
  }


  /**
   * Adds new topic to the diagram.
   * 
   * @param topicName Topic name.
   */
  addTopic(topicName:string) {
    if (topicName) {
      this.diagram.topics.push(
        new Topic(topicName, this.getRandomColor(), this.getRandomColor() ) // stroke, fill
      );
    }
  }

  /**
   * Gets a random color from configured color palette
   * for diagrom topic stroke and fill color display.
   */
  private getRandomColor():string {
    return this.colorPalette[(Math.random() * 12)];
  }
}
