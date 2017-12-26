import { TvwTeilnehmerlistePage } from './app.po';

describe('tvw-teilnehmerliste App', () => {
  let page: TvwTeilnehmerlistePage;

  beforeEach(() => {
    page = new TvwTeilnehmerlistePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
