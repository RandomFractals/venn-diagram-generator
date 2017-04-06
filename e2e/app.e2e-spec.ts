import { VennDiagramGeneratorPage } from './app.po';

describe('venn-diagram-generator App', () => {
  let page: VennDiagramGeneratorPage;

  beforeEach(() => {
    page = new VennDiagramGeneratorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
