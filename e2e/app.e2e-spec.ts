import { CrowdwarePage } from './app.po';

describe('crowdware App', () => {
  let page: CrowdwarePage;

  beforeEach(() => {
    page = new CrowdwarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
