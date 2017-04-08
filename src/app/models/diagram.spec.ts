import { TestBed, async } from '@angular/core/testing';

import {Diagram} from './diagram';
import {Topic} from './topic';

describe('Diagram', () => {

  it('every Diagram should have a name', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    expect(diagram.name).toEqual('Test Diagram');
  }));

  it('new Diagram should have 3 Topics to start with', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    expect(diagram.topics.length).toEqual(3);
  }));

  it('one can add new Topic to the Diagram', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    const topic:Topic = diagram.addTopic('Test Topic');
    expect(diagram.topics.length).toEqual(4);
  }));

  it('one can remove a Topic from the Diagram', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    diagram.removeTopic(2); // remove last topic
    expect(diagram.topics.length).toEqual(2);
  }));

  it('one can move a Topic Up in the Diagram topic list', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    diagram.moveTopicUp(1); // move up 2nd topic
    expect(diagram.topics[0].name).toEqual('Topic 2');
    expect(diagram.topics[1].name).toEqual('Topic 1');
  }));

  it('one can move a Topic Down in the Diagram topic list', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    diagram.moveTopicDown(1); // move down 2nd topic
    expect(diagram.topics[1].name).toEqual('Topic 3');
    expect(diagram.topics[2].name).toEqual('Topic 2');
  }));

  it('one can rename a diagram Topic', async(() => {
    const diagram:Diagram = new Diagram('Test Diagram');
    diagram.topics[0].name = 'Test Topic';
    expect(diagram.topics[0].name).toEqual('Test Topic');
  }));

});
