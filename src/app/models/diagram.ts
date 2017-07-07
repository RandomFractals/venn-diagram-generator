import {Topic} from './topic';

/**
 * Defines a generic diagram view model type with a diagram name and a list of topics.
 *
 * Note: this can be used as a base class for Venn diagram or other topical graphs.
 */
export class Diagram {

  topics: Array<Topic> = new Array<Topic>();

  // starter stroke and fill color palettes
  // for topics and diagram nodes SVG elements renders
  strokeColorPalette = [
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
    '#b15928',
  ];

  fillColorPalette = [
    '#a6cee3',
    '#b2df8a',
    '#fb9a99',
    '#fdbf6f',
    '#a6e3d4',
    '#ffff99',
  ];


  /**
   * Creates new diagram view model instance.
   *
   * @param name Diagram name.
   */
  constructor(public name: string = 'Data Science') {
    // add 3 starter topics for this diagram:
    // we'll stick with Data Science primes for now
    this.addTopic('Hacking Skills');
    this.addTopic('Math & Stats');
    this.addTopic('Domain Expertise');
  }


  /**
   * Adds new topic to the diagram.
   *
   * @param topicName Topic name.
   *
   * @return Added topic instance, or null, if topic name is null.
   */
  addTopic(topicName: string) {
    let newTopic: Topic;
    if (topicName) {
      // create and add new topic
      newTopic = new Topic(topicName,
        this.getRandomColor(this.strokeColorPalette),
        // this.getRandomColor(this.fillColorPalette) );
        this.fillColorPalette[this.topics.length % this.fillColorPalette.length]);
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
  removeTopic(topicIndex: number) {
    let removedTopic: Topic;
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
  moveTopicUp(topicIndex: number) {
    if (topicIndex > 0 && topicIndex < this.topics.length) {
      this.topics[topicIndex - 1] = this.topics.splice(topicIndex, 1, this.topics[topicIndex - 1])[0];
    }
  }


  /**
   * Moves a diagram topic down for topic list reordering.
   *
   * @param topicIndex Target topic index.
   */
  moveTopicDown(topicIndex: number) {
    if (topicIndex >= 0 && topicIndex < this.topics.length - 1) {
      this.topics[topicIndex + 1] = this.topics.splice(topicIndex, 1, this.topics[topicIndex + 1])[0];
    }
  }

  /**
   * Gets a random color from configured color palettes
   * for diagrom topic stroke and fill color display.
   */
  private getRandomColor(colorPalette: Array<string>): string {
    return colorPalette[Math.round(Math.random() * colorPalette.length)];
  }

}
