import { A4StarterPage } from './app.po';

describe('a4-starter App', () => {
  let page: A4StarterPage;

  beforeEach(() => {
    page = new A4StarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
