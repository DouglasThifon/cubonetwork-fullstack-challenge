import { ChallengeAppPage } from './app.po';

describe('challenge-app App', () => {
  let page: ChallengeAppPage;

  beforeEach(() => {
    page = new ChallengeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
  });
});
