import {Topic} from './topic';

/**
 * Defines a generic diagram data model type with a diagram name and a list of topics.
 * 
 * Note: this can be used as a base class for Venn diagram or other topical graphs.
 */
export class Diagram {

  topics: Array<Topic> = new Array<Topic>();

  /**
   * Creates new diagram model instance.
   * 
   * @param name Diagram name.
   */
  constructor(public name:string) {}
}