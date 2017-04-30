import R from 'ramda';
import Promise from 'bluebird';
import services from '../services';
import utils from '../utils/';

services.newsAPI.getAllArticlesByAllSources()
.then(getAllArticlesByAllSourcesRes => Promise.all(
  R.flatten(getAllArticlesByAllSourcesRes.map(utils.newsApiUtils.unpackArtilceResponse))
  .map(services.firebase.Articles.addArticle)))
.then(() => {
  process.exit(0);
})
.catch((err) => {
  utils.logger.error(`Error: ${err}`);
});
