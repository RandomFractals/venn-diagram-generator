import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// import model classes
import {Diagram} from './models/diagram';
import {Topic} from './models/topic';

// import Venn diagram SVG component for SVG view updates
import {VennDiagramComponent} from './venn-diagram/venn-diagram.component';

/**
 * Main Venn Diagram generator app component.
 */
@Component({
  selector: 'venn-diagram-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // Venn diagram data model instance
  diagram: Diagram = new Diagram('Data Science');

  // actual SVG Venn diagrram element reference
  @ViewChild(VennDiagramComponent)
  vennDiagram: VennDiagramComponent;

  /**
   * Creates new Venn diagram designer app instance.
   */
  constructor() {
    // TODO: load prior diagram from local storage in v2?
  }


  /**
   * Updates Venn diagram segments after app view init.
   */
  ngAfterViewInit() {
    this.vennDiagram.updateSegments(this.diagram);
  }


  /**
   * Diagram change app event handler.
   *
   * @param diagram Changed diagram instance.
   */
  onDiagramChange(diagram: Diagram) {
    console.log(`App::onDiagramChange: ${diagram.name} diagram changed`);
    // TODO: save it in local storage in v2?

    // update Venn diagram svg view
    this.vennDiagram.updateSegments(diagram);
  }
}
