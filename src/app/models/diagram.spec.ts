import { TestBed, async } from '@angular/core/testing';

import {Diagram} from './diagram';
import {Topic} from './topic';

describe('Diagram', () => {

  it('every Diagram should have a name', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    expect(diagram.name).toEqual('Test Diagram');
  }));

  it('new Diagram should have 3 topics to start with', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    expect(diagram.topics.length).toEqual(3);
  }));

  it('one can add new topic to a Diagram', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    const topic:Topic = diagram.addTopic('Test Topic');
    expect(diagram.topics.length).toEqual(4);
  }));

});
