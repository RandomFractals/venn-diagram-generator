import { Component, OnInit } from '@angular/core';

// import model classes
import {Diagram} from '../models/diagram';
import {Topic} from '../models/topic';


@Component({
  selector: 'topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  // Venn diagram data model instance
  diagram:Diagram = new Diagram('My');

  // selected topic for editing
  selectedTopicIndex:number = -1;

  constructor() { }

  ngOnInit() {
  }


  /**
   * Adds new topic to the diagram topic list.
   * 
   * @param topicName New topic name.
   */
  addTopic(topicName:string) {
    this.diagram.addTopic(topicName);
  }


  /**
   * Enables topic editing UI.
   * 
   * @param topicIndex Selected topic index.
   */
  editTopic(topicIndex:number)  {

    // hide last selected topic editor
    this.showTopicEditor(this.selectedTopicIndex, false); 

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
    if (topicIndex >= 0 && topicIndex < this.diagram.topics.length) {
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

}
