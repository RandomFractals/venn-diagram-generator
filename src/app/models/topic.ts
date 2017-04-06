/**
 * Defines a generic topic data model type for topical maps and diagrams.
 */
export class Topic {

  /**
   * Creates new topic model data instance with name, 
   * stroke and fill color properties
   * for a topical diagram display.
   * 
   * @param name Topic name.
   * @param strokeColor Topic stroke color.
   * @param fillColor Topic fill color.
   */
  constructor(public name:string, public strokeColor:string, public fillColor:string) {}
}