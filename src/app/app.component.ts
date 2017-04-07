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
  selectedTopicIndex:number = -1;

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

    if (this.selectedTopicIndex >=0 && this.selectedTopicIndex < this.diagram.topics.length) {
      // hide last selected topic editor
      this.showTopicEditor(this.selectedTopicIndex, false); 
    }

    console.log('TopicList::editTopic:', topicIndex);
    
    // show new topic editor
    this.selectedTopicIndex = topicIndex;
    this.showTopicEditor(this.selectedTopicIndex, true);
  }


  /**
   * Toggles topic editor display.
   * 
   * @param topicIndex Topic index editor to show.
   * @param show Show/hide topic editor flag.
   */
  showTopicEditor(topicIndex:number, show:boolean) {
    if (show) {
      document.querySelector(`#topic-label-${topicIndex}`).className = 'hidden';
      document.querySelector(`#topic-editor-${topicIndex}`).className = 'show';
      document.querySelector(`#topic-toggles-${topicIndex}`).className = 'show';
    } else { // hide
      document.querySelector(`#topic-label-${topicIndex}`).className = 'show';
      document.querySelector(`#topic-editor-${topicIndex}`).className = 'hidden';
      document.querySelector(`#topic-toggles-${topicIndex}`).className = 'hidden';
    }
  }
}
