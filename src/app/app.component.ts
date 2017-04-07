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

  // selected topic for editing
  selectedTopicIndex:number = 0;

  /**
   * Creates new Venn diagram designer app instance.
   */
  constructor() {

  }


  /**
   * Enables topic editing UI.
   * 
   * @param topicIndex Selected topic index.
   */
  editTopic(topicIndex:number)  {

    // hide last selected topic editor
    document.querySelector(`#topic-editor-${this.selectedTopicIndex}`).className = 'hidden';
    
    // show new topic editor
    this.selectedTopicIndex = topicIndex;
    console.log('edit topic:', this.selectedTopicIndex);
    document.querySelector(`#topic-editor-${this.selectedTopicIndex}`).className = 'show';
  }

}
