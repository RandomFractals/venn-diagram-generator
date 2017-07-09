/**
 * Defines a generic topic view model type for topical maps and diagrams.
 */
export class Topic {

  // topic svg ellipse position and radius view model properties
  cx = 250;
  cy = 250;
  rx = 60;
  ry = 60;

  /**
   * Creates new topic view model instance with name,
   * stroke and fill color properties
   * for a topical diagram display.
   *
   * @param name Topic name.
   * @param strokeColor Topic shape stroke color.
   * @param fillColor Topic shape fill color.
   */
  constructor(public name: string,
    public strokeColor: string,
    public fillColor: string) {
    }
}
