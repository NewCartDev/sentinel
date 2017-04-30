function unpackArtilceResponse(res) {
  return res.data.articles;
}

function unpackSourceResponse(res) {
  return res.data.sources;
}


module.exports = {
  unpackArtilceResponse,
  unpackSourceResponse,
};
