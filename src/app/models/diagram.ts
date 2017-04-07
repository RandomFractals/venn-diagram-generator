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
   * 
   * @return Added topic instance, or null, if topic name is null.
   */
  addTopic(topicName:string) {
    let newTopic:Topic;
    if (topicName) {
      // create and add new topic
      newTopic = new Topic(topicName, this.getRandomColor(), this.getRandomColor() ) // stroke, fill
      this.topics.push(newTopic);
    }
    return newTopic;
  }


  /**
   * Removes a topic from the topics list.
   * 
   * @param topicIndex Topic index.
   * 
   * @return Removed topic instance or null.
   */
  removeTopic(topicIndex:number) {
    let removedTopic:Topic;
    if (topicIndex >= 0 && topicIndex < this.topics.length) {
      removedTopic = this.topics.splice(topicIndex, 1)[0];
    }
    return removedTopic;
  }


  /**
   * Moves a diagram topic up for topic list reordering.
   * 
   * @param topicIndex Target topic index.
   */
  moveTopicUp(topicIndex:number) {
    if (topicIndex > 0 && topicIndex < this.topics.length) {
      this.topics[topicIndex-1] = this.topics.splice(topicIndex, 1, this.topics[topicIndex-1])[0];
    }
  }


  /**
   * Moves a diagram topic down for topic list reordering.
   * 
   * @param topicIndex Target topic index.
   */
  moveTopicDown(topicIndex:number) {
    if (topicIndex >= 0 && topicIndex < this.topics.length-1) {
      this.topics[topicIndex+1] = this.topics.splice(topicIndex, 1, this.topics[topicIndex+1])[0];
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