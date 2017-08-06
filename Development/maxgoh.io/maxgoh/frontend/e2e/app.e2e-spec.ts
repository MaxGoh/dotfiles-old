import { Maxgoh.IoPage } from './app.po';

describe('maxgoh.io App', () => {
  let page: Maxgoh.IoPage;

  beforeEach(() => {
    page = new Maxgoh.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
