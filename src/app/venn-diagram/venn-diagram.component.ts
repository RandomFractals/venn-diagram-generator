import { Component, Input, OnInit, NgZone } from '@angular/core';

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
  @Input()
  diagram: Diagram = new Diagram('Data Science');

  // Venn diagram svg
  svg = null;

  // svg view setttings
  width = 540;
  height = 540;
  minSize = 300;
  margin = {top: 30, right: 10, bottom: 10, left: 10};
  radius = 100; // main circle radius

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
   * Updates actual Venn diagram segments SVG on diagram model changes.
   *
   * @param diagram Diagram model instance to use for SVG view update.
   */
  updateSegments(diagram: Diagram) {
    console.log(`VennDiagram::updateSegments: updating ${diagram.name} svg view`);
    // loop through diagram topics and create svg view segments for display
    for (let i=0; i < diagram.topics.length; i++) {
      // calculate segment element placement angle
      // note: for semi-circle use (i/topics.length)
      let angle: number = (i / (diagram.topics.length / 2)) * Math.PI;
      // calculate x and y position of the segment element
      let topic: Topic = diagram.topics[i];
      topic.cx = (this.radius * Math.cos(angle)) + (this.width / 2);
      topic.cy = (this.radius * Math.sin(angle)) + (this.width / 2);

      // adjust segment radius for diagram intersection overlap
      topic.rx = this.radius + 40;
      topic.ry = this.radius + 40;
    }
  }


  /**
   * Exports current diagram view SVG via blob data download link trick.
   */
  exportSvg() {
    console.log(`VennDiagram::exportSvg: ${this.diagram.name}-VennDiagram.svg`);

    // get svg content
    const svgData = this.svg.outerHTML;

    // create svg blob
    const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});

    // create svg blobl url
    const svgBlobUrl = URL.createObjectURL(svgBlob);

    // download svg
    this.downloadBlob(svgBlobUrl, `${this.diagram.name}-VennDiagram.svg`);
  }


  /**
   * Saves current diagram view image in png format
   * via svg blob to canvas image export trick.
   */
  saveAsPng() {

    const fileName = `${this.diagram.name}-VennDiagram.png`;
    console.log(`VennDiagram::saveAsPng: ${fileName}`);
    console.log(this.svg.viewBox.baseVal); // .getBBox());

    // create canvas for generating image data
    const canvas = document.createElement('canvas');
    const bbox = this.svg.viewBox.baseVal; // .getBBox();
    canvas.width = bbox.width;
    canvas.height = bbox.height;
    const canvasContext = canvas.getContext('2d');
    canvasContext.clearRect(0, 0, bbox.width, bbox.height);

    // get svg content
    const svgData = this.svg.outerHTML;

    // create svg blob
    const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});

    // create svg blobl url
    const svgBlobUrl = URL.createObjectURL(svgBlob);

    // create diagram image
    const image = new Image();

    // load and save diagram image
    const download = this.downloadBlob;
    image.onload = function () {
      // draw loaded image on canvas
      canvasContext.drawImage(image, 0, 0);
      URL.revokeObjectURL(svgBlobUrl);
      if (typeof navigator !== 'undefined' && navigator.msSaveOrOpenBlob) {
        const imageBlob = canvas.msToBlob();
        navigator.msSaveOrOpenBlob(imageBlob, fileName);
      } else {
        const imageDataUrl = canvas.toDataURL('image/png')
            .replace('image/png', 'image/octet-stream');
        download(imageDataUrl, fileName);
      }
      // document.removeChild(canvas);
    };

    // trigger svg image load
    image.src = svgBlobUrl;

  } // end of saveAsPng()


  /*--------------- Private Methods -----------------------*/

  /**
   * Downloads a blob for svg export and save as png.
   * @param blobUrl Blob data url.
   * @param fileName File name for saving blob data.
   */
  private downloadBlob(blobUrl, fileName) {
    // create download link
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);

    // download blob data
    downloadLink.click();

    // remove download link
    document.body.removeChild(downloadLink);
  }
}
