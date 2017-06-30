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
  diagram: Diagram = new Diagram('My');

  constructor(private ngZone:NgZone) {
    window.onresize = (windowResizeEvent) => {
      ngZone.run( () => {
        console.log(`VennDiagram::onWindowResize: w=${window.innerWidth} h=${window.innerHeight}`);
      });
    };
   }

  ngOnInit() {
  }

}