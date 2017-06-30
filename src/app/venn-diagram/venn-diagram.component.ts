import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'venn-diagram',
  templateUrl: './venn-diagram.component.html',
  styleUrls: ['./venn-diagram.component.css']
})
export class VennDiagramComponent implements OnInit {

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