import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input()
  diagram: Diagram = new Diagram('Data Science');

  // diagram change event emitter
  @Output()
  private onDiagramChange = new EventEmitter();

  // selected topic index for editing
  private _selectedTopicIndex: number = -1;

  /**
   * Creates new topic list for Venn diagram editing.
   */
  constructor() { }

  ngOnInit() {
  }


  /**
   * Adds new topic to the diagram topic list.
   *
   * @param topicName New topic name.
   */
  addTopic(topicName: string) {
    this.diagram.addTopic(topicName);
    this.onDiagramChange.emit(this.diagram);
  }


  /**
   * Removes specified topic from the topic list.
   *
   * @param topicIndex Index of the topic to remove.
   */
  removeTopic(topicIndex: number) {
    this.diagram.removeTopic(topicIndex);
    this.onDiagramChange.emit(this.diagram);
  }


  /**
   * Moves specified topic up the topic list.
   *
   * @param topicIndex Index of the topic to move up.
   */
  moveTopicUp(topicIndex: number) {
    this.diagram.moveTopicUp(topicIndex);
    this.onDiagramChange.emit(this.diagram);
  }


  /**
   * Moves specified topic down the topic list.
   *
   * @param topicIndex Index of the topic to move down.
   */
  moveTopicDown(topicIndex: number) {
    this.diagram.moveTopicDown(topicIndex);
    this.onDiagramChange.emit(this.diagram);
  }


  /**
   * Enables topic editing UI.
   *
   * @param topicIndex Selected topic index.
   */
  editTopic(topicIndex: number)  {

    // hide last selected topic editor
    this.showTopicEditor(this._selectedTopicIndex, false);
    console.log('TopicList::editTopic:', topicIndex);

    // show selected topic editor
    this._selectedTopicIndex = topicIndex;
    this.showTopicEditor(this._selectedTopicIndex, true);
  }


  /**
   * Toggles inline topic editor display.
   *
   * @param topicIndex Topic index editor to show.
   * @param show Show/hide topic editor flag.
   */
  showTopicEditor(topicIndex: number, show: boolean) {
    if (topicIndex >= 0 && topicIndex < this.diagram.topics.length) {
      if (show) {
        document.querySelector(`#topic-label-${topicIndex}`).className = 'hidden';
        document.querySelector(`#topic-editor-${topicIndex}`).className = 'topic-editor show';
        document.querySelector(`#topic-toggles-${topicIndex}`).className = 'topic-toggles show';
      } else { // hide
        document.querySelector(`#topic-label-${topicIndex}`).className = 'show';
        document.querySelector(`#topic-editor-${topicIndex}`).className = 'hidden';
        document.querySelector(`#topic-toggles-${topicIndex}`).className = 'hidden';
      }
    }
  }

}
