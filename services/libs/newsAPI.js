import axios from 'axios';
import R from 'ramda';
import Promise from 'bluebird';

const $newsAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'X-Api-Key': process.env.NEWS_API_KEY,
  },
});

const newsAPIService = {
  getSources() {
    return $newsAPI.get('/sources?language=en');
  },
  getArticlesBySource(sourceName) {
    return $newsAPI.get(`/articles?source=${sourceName}`);
  },
  getAllArticlesByAllSources() {
    const $this = this;
    return this.getSources()
     .then(getSourcesRes => getSourcesRes.data.sources.map(R.partial(R.prop, ['id'])))
     .then(sourceIDs => Promise.map(sourceIDs, $this.getArticlesBySource));
  },
};


module.exports = newsAPIService;
