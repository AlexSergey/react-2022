describe('Movie List Component', () => {
  it('primary', async function renderMovieList() {
    await this.browser.selectStory('components-movielistcomponent--movie-list');

    await this.browser.assertView('plain', 'body');
  });
});
