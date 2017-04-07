import {Topic} from './topic';

/**
 * Defines a generic diagram view model type with a diagram name and a list of topics.
 * 
 * Note: this can be used as a base class for Venn diagram or other topical graphs.
 */
export class Diagram {

  topics: Array<Topic> = new Array<Topic>();

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
   * Creates new diagram view model instance.
   * 
   * @param name Diagram name.
   */
  constructor(public name:string) {
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
    let topic:Topic;
    if (topicName) {
      // create and add new topic
      topic = new Topic(topicName, this.getRandomColor(), this.getRandomColor() ) // stroke, fill
      this.topics.push(topic);
    }
    return topic;
  }


  /**
   * Gets a random color from configured color palette
   * for diagrom topic stroke and fill color display.
   */
  private getRandomColor():string {
    return this.colorPalette[(Math.random() * 12)];
  }
  
}