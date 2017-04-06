import { TestBed, async } from '@angular/core/testing';

import {Diagram} from './diagram';
import {Topic} from './topic';

describe('Diagram', () => {

  it('new Diagram should have 3 topics to start with', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    expect(diagram.topics.length).toEqual(3);
  }));

});
