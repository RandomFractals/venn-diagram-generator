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

  // Venn diagram svg
  svg = null;

  /**
   * Creates new instance of Venn Diagram component.
   * @param ngZone NgZone for scaling diagram svg on app window resize.
   */
  constructor(private ngZone: NgZone) {
    window.onresize = (windowResizeEvent) => {
      ngZone.run( () => {
        console.log(`VennDiagram::onWindowResize: w=${window.innerWidth} h=${window.innerHeight}`);
        // TODO: scale svg to new window size
      });
    };
   }


  /**
   * Initializes svg element reference, etc. on angular component init.
   */
  ngOnInit() {
    // get diagram svg reference
    this.svg = document.querySelector('#svg');
  }


  /**
   * Exports current diagram view SVG.
   */
  exportSvg() {
    console.log(`VennDiagram::exportSvg: ${this.diagram.name}-VennDiagram.svg`);

    // get svg content
    const svgData = this.svg.outerHTML;

    // create svg blob
    const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});

    // create svg blobl url
    const svgUrl = URL.createObjectURL(svgBlob);

    // add svg blob download link
    const svgDownloadLink = document.createElement('a');
    svgDownloadLink.href = svgUrl;

    // download svg
    svgDownloadLink.download = `${this.diagram.name}-VennDiagram.svg`;
    document.body.appendChild(svgDownloadLink);
    svgDownloadLink.click();

    // remove svg download link
    document.body.removeChild(svgDownloadLink);
  }


  /**
   * Saves current diagram view image in png format.
   */
  saveAsPng() {
    console.log(`VennDiagram::saveAsPng: TODO`);
    // TODO
  }


}