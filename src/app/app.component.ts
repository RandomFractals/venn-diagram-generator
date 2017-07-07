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

  // Venn diagram data model instance
  diagram: Diagram = new Diagram('Data Science');

  /**
   * Creates new Venn diagram designer app instance.
   */
  constructor() {
    // TODO: load prior diagram from local storage in v2?
  }


  /**
   * Diagram change app event handler.
   *
   * @param diagram Changed diagram instance.
   */
  onDiagramChange(diagram: Diagram) {
    console.log(`App::onDiagramChange: ${diagram.name} diagram changed`);
    // TODO: save it in local storage in v2?
  }
}
