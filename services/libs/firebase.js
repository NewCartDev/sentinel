import R from 'ramda';
import { fb } from '../../constants/fb';

const articlesRef = fb.database().ref('articles');

const cleanArticles = (ref) => {
  ref.remove();
};

const addArticle = (ref, article) => {
  ref.push(article);
};

const Articles = {
  addArticle: R.partial(addArticle, [articlesRef]),
  cleanArticles: R.partial(cleanArticles, [articlesRef]),
};

module.exports = {
  Articles,
};
