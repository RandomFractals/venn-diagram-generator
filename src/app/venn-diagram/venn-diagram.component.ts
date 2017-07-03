import { Component, OnInit, NgZone } from '@angular/core';

// import model classes
import {Diagram} from '../models/diagram';
import {Topic} from '../models/topic';

@Component({
  selector: 'venn-diagram',
  templateUrl: './venn-diagram.component.html',
  styleUrls: ['./venn-diagram.component.css']
})
export class VennDiagramComponent implements OnInit {

  // Venn diagram data model instance
  diagram: Diagram = new Diagram('Test');

  constructor(private ngZone: NgZone) {
    window.onresize = (windowResizeEvent) => {
      ngZone.run( () => {
        console.log(`VennDiagram::onWindowResize: w=${window.innerWidth} h=${window.innerHeight}`);
      });
    };
   }

  ngOnInit() {
  }

  /**
   * Exports current diagram view SVG.
   */
  exportSvg() {
    console.log(`VennDiagram::exportSvg: ${this.diagram.name}.svg`);
    const svgData = document.querySelector('#svg').outerHTML;
    const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `${this.diagram.name}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  /**
   * Saves current diagram view image in png format.
   */
  saveAsPng() {
    console.log(`VennDiagram::saveAsPng: TODO`);
    // TODO
  }


}