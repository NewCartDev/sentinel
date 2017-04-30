import {expect} from 'chai';
import newsAPI from '../../services/libs/newsAPI';

describe('newsAPI', function () {
  it('should exist', function () {
    expect(newsAPI).isDefined;
  });

  it('gets sources from newsAPI', function (done) {
    newsAPI.getSources()
    .then(getSourcesRes => {
      expect(getSourcesRes.data).isArray;
      done();
    });
  });

});
